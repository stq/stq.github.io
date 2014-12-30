(function( $, undefined ) {

    var tabId = 0,
        rhash = /#.*$/;

    function getNextTabId() {
        return ++tabId;
    }

    $.widget( "ui.tabs", {
        version: "1.10.3.1-micro",
        delay: 300,
        options: {
            active: null,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _create: function() {
            var that = this,
                options = this.options;

            this.running = false;

            this.element.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" );

            this._processTabs();
            options.active = this._initialActive();

            if ( this.options.active !== false && this.anchors.length ) {
                this.active = this._findActive( options.active );
            } else {
                this.active = $();
            }

            this._refresh();
        },

        _initialActive: function() {
            var active = this.options.active;

            if ( active === null ) {

                if ( active === null ) {
                    active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
                }

                if ( active === null || active === -1 ) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            if ( active !== false ) {
                active = this.tabs.index( this.tabs.eq( active ) );
                if ( active === -1 ) {
                    active = 0;
                }
            }

            if ( active === false && this.anchors.length ) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab( this.active )
            };
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                this._activate( value );
                return;
            }

            this._super( key, value);

            if ( key === "event" ) {
                this._setupEvents( value );
            }

            if ( key === "heightStyle" ) {
                this._setupHeightStyle( value );
            }
        },

        _tabId: function( tab ) {
            return tab.attr( "aria-controls" ) || "ui-tabs-" + getNextTabId();
        },

        _sanitizeSelector: function( hash ) {
            return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
        },

        _refresh: function() {
            this._setupEvents( this.options.event );
            this._setupHeightStyle( this.options.heightStyle );

            this.tabs.not( this.active ).attr({
                "aria-selected": "false",
                tabIndex: -1
            });
            this.panels.not( this._getPanelForTab( this.active ) )
                .hide()
                .attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                });

            // Make sure one tab is in the tab order
            if ( !this.active.length ) {
                this.tabs.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active
                    .addClass( "ui-tabs-active ui-state-active" )
                    .attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    });
                this._getPanelForTab( this.active )
                    .show()
                    .attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    });
            }
        },

        _processTabs: function() {
            var that = this;

            this.tablist = this._getList()
                .addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
                .attr( "role", "tablist" );

            this.tabs = this.tablist.find( "> li:has(a[href])" )
                .addClass( "ui-state-default ui-corner-top" )
                .attr({
                    role: "tab",
                    tabIndex: -1
                });

            this.anchors = this.tabs.map(function() {
                return $( "a", this )[ 0 ];
            })
                .addClass( "ui-tabs-anchor" )
                .attr({
                    role: "presentation",
                    tabIndex: -1
                });

            this.panels = $();

            this.anchors.each(function( i, anchor ) {
                var selector, panel, panelId,
                    anchorId = $( anchor ).uniqueId().attr( "id" ),
                    tab = $( anchor ).closest( "li" ),
                    originalAriaControls = tab.attr( "aria-controls" );

                selector = anchor.hash;
                panel = that.element.find( that._sanitizeSelector( selector ) );

                if ( panel.length) {
                    that.panels = that.panels.add( panel );
                }
                if ( originalAriaControls ) {
                    tab.data( "ui-tabs-aria-controls", originalAriaControls );
                }
                tab.attr({
                    "aria-controls": selector.substring( 1 ),
                    "aria-labelledby": anchorId
                });
                panel.attr( "aria-labelledby", anchorId );
            });

            this.panels
                .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
                .attr( "role", "tabpanel" );
        },

        _getList: function() {
            return this.element.find( "ol,ul" ).eq( 0 );
        },

        _createPanel: function( id ) {
            return $( "<div>" )
                .attr( "id", id )
                .addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
                .data( "ui-tabs-destroy", true );
        },

        _setupEvents: function( event ) {
            var events = {
                click: function( event ) {
                    event.preventDefault();
                }
            };
            if ( event ) {
                $.each( event.split(" "), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.anchors.add( this.tabs ).add( this.panels ) );
            this._on( this.anchors, events );

            this._focusable( this.tabs );
            this._hoverable( this.tabs );
        },

        _setupHeightStyle: function( heightStyle ) {
            var maxHeight,
                parent = this.element.parent();

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.element.children().not( this.panels ).each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.panels.each(function() {
                    $( this ).height( Math.max( 0, maxHeight -
                        $( this ).innerHeight() + $( this ).height() ) );
                })
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.panels.each(function() {
                    maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
                }).height( maxHeight );
            }
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                anchor = $( event.currentTarget ),
                tab = anchor.closest( "li" ),
                clickedIsActive = tab[ 0 ] === active[ 0 ],
                toShow = this._getPanelForTab( tab ),
                toHide = !active.length ? $() : this._getPanelForTab( active ),
                eventData = {
                    oldTab: active,
                    oldPanel: toHide,
                    newTab: tab,
                    newPanel: toShow
                };

            event.preventDefault();

            if ( tab.hasClass( "ui-state-disabled" ) ||
                // tab is already loading
                tab.hasClass( "ui-tabs-loading" ) ||
                // can't switch durning an animation
                this.running ||
                // click on active header, but not collapsible
                clickedIsActive
                // allow canceling activation
                ) {
                return;
            }
            options.active = this.tabs.index( tab );

            this.active = clickedIsActive ? $() : tab;

            if ( !toHide.length && !toShow.length ) {
                $.error( "jQuery UI Tabs: Mismatching fragment identifier." );
            }

            this._toggle( event, eventData );
        },

        _toggle: function( event, eventData ) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger( "activate", event, eventData );
            }

            function show() {
                eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

                if ( toShow.length && that.options.show ) {
                    that._show( toShow, that.options.show, complete );
                } else {
                    toShow.show();
                    complete();
                }
            }

            // start out by hiding, then showing, then completing
            if ( toHide.length && this.options.hide ) {
                this._hide( toHide, this.options.hide, function() {
                    eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                    show();
                });
            } else {
                eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
                toHide.hide();
                show();
            }

            toHide.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            eventData.oldTab.attr( "aria-selected", "false" );
            if ( toShow.length && toHide.length ) {
                eventData.oldTab.attr( "tabIndex", -1 );
            } else if ( toShow.length ) {
                this.tabs.filter(function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                }).attr( "tabIndex", -1 );
            }

            toShow.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            });
            eventData.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            });
        },

        _activate: function( index ) {
            var anchor,
                active = this._findActive( index );

            if ( active[ 0 ] === this.active[ 0 ] ) {
                return;
            }

            if ( !active.length ) {
                active = this.active;
            }

            anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },

        _findActive: function( index ) {
            return index === false ? $() : this.tabs.eq( index );
        },

        _getIndex: function( index ) {
            // meta-function to give users option to provide a href string instead of a numerical index.
            if ( typeof index === "string" ) {
                index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
            }

            return index;
        },

        _destroy: function() {

            this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" );

            this.tablist
                .removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
                .removeAttr( "role" );

            this.anchors
                .removeClass( "ui-tabs-anchor" )
                .removeAttr( "role" )
                .removeAttr( "tabIndex" )
                .removeUniqueId();

            this.tabs.add( this.panels ).each(function() {
                if ( $.data( this, "ui-tabs-destroy" ) ) {
                    $( this ).remove();
                } else {
                    $( this )
                        .removeClass( "ui-state-default ui-state-active" +
                        "ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
                        .removeAttr( "tabIndex" )
                        .removeAttr( "aria-live" )
                        .removeAttr( "aria-busy" )
                        .removeAttr( "aria-selected" )
                        .removeAttr( "aria-labelledby" )
                        .removeAttr( "aria-hidden" )
                        .removeAttr( "aria-expanded" )
                        .removeAttr( "role" );
                }
            });

            this.tabs.each(function() {
                var li = $( this ),
                    prev = li.data( "ui-tabs-aria-controls" );
                if ( prev ) {
                    li
                        .attr( "aria-controls", prev )
                        .removeData( "ui-tabs-aria-controls" );
                } else {
                    li.removeAttr( "aria-controls" );
                }
            });

            this.panels.show();

            if ( this.options.heightStyle !== "content" ) {
                this.panels.css( "height", "" );
            }
        },

        load: function( index, event ) {
            index = this._getIndex( index );
            this._activate(index);
        },

        _getPanelForTab: function( tab ) {
            var id = $( tab ).attr( "aria-controls" );
            return this.element.find( this._sanitizeSelector( "#" + id ) );
        }
    });

})( jQuery );