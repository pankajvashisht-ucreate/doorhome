(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comman/DashboardNavbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comman/DashboardNavbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: ""
    };
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar: function hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu: function toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/ContentFooter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/ContentFooter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      year: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Comman_DashboardNavbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Comman/DashboardNavbar */ "./resources/js/components/Comman/DashboardNavbar.vue");
/* harmony import */ var _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFooter.vue */ "./resources/js/layouts/ContentFooter.vue");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DashboardNavbar: _components_Comman_DashboardNavbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContentFooter: _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FadeTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_2__["FadeTransition"]
  },
  data: function data() {
    return {
      sidebarBackground: "vue"
    };
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comman/DashboardNavbar.vue?vue&type=template&id=81c3620e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comman/DashboardNavbar.vue?vue&type=template&id=81c3620e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "base-nav",
    {
      staticClass: "navbar-top navbar-dark",
      attrs: { id: "navbar-main", "show-toggle-button": false, expand: "" }
    },
    [
      _c(
        "form",
        {
          staticClass:
            "navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
        },
        [
          _c(
            "div",
            { staticClass: "form-group mb-0" },
            [
              _c("base-input", {
                staticClass: "input-group-alternative",
                attrs: {
                  placeholder: "Search",
                  alternative: "",
                  "addon-right-icon": "fas fa-search"
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "navbar-nav align-items-center d-none d-md-flex" },
        [
          _c(
            "li",
            { staticClass: "nav-item dropdown" },
            [
              _c(
                "base-dropdown",
                { staticClass: "nav-link pr-0" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "media align-items-center",
                      attrs: { slot: "title" },
                      slot: "title"
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "avatar avatar-sm rounded-circle" },
                        [
                          _c("img", {
                            attrs: {
                              alt: "Image placeholder",
                              src: __webpack_require__(/*! ../../assets/img/theme/team-4-800x800.jpg */ "./resources/js/assets/img/theme/team-4-800x800.jpg")
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "media-body ml-2 d-none d-lg-block" },
                        [
                          _c(
                            "span",
                            { staticClass: "mb-0 text-sm font-weight-bold" },
                            [_vm._v("Jessica Jones")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  [
                    _c("div", { staticClass: "dropdown-header noti-title" }, [
                      _c("h6", { staticClass: "text-overflow m-0" }, [
                        _vm._v("Welcome!")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: "/profile" }
                      },
                      [
                        _c("i", { staticClass: "ni ni-single-02" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("My profile")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: "/profile" }
                      },
                      [
                        _c("i", { staticClass: "ni ni-settings-gear-65" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Settings")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: "/profile" }
                      },
                      [
                        _c("i", { staticClass: "ni ni-calendar-grid-58" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Activity")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: "/profile" }
                      },
                      [
                        _c("i", { staticClass: "ni ni-support-16" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Support")])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "dropdown-item",
                        attrs: { to: "/profile" }
                      },
                      [
                        _c("i", { staticClass: "ni ni-user-run" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Logout")])
                      ]
                    )
                  ]
                ],
                2
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/ContentFooter.vue?vue&type=template&id=5b6a2bc0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/ContentFooter.vue?vue&type=template&id=5b6a2bc0& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "footer px-4" }, [
    _c(
      "div",
      { staticClass: "row align-items-center justify-content-lg-between" },
      [
        _c("div", { staticClass: "col-lg-6" }, [
          _c(
            "div",
            { staticClass: "copyright text-center text-lg-left text-muted" },
            [
              _vm._v(
                "\n                © " + _vm._s(_vm.year) + "\n                "
              ),
              _c(
                "a",
                {
                  staticClass: "font-weight-bold ml-1",
                  attrs: { href: "@", target: "_blank" }
                },
                [_vm._v("Home Door")]
              ),
              _vm._v("\n                &\n                "),
              _c(
                "a",
                {
                  staticClass: "font-weight-bold ml-1",
                  attrs: { href: "#", target: "_blank" }
                },
                [_vm._v("Pankaj Vashisht team")]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper", class: { "nav-open": _vm.$sidebar.showSidebar } },
    [
      _c(
        "side-bar",
        {
          attrs: {
            "background-color": _vm.sidebarBackground,
            "short-title": "DoorHome",
            title: "DoorHome"
          }
        },
        [
          _c(
            "template",
            { slot: "links" },
            [
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "Dashboard",
                    icon: "ni ni-tv-2 text-primary",
                    path: "/dashboard"
                  }
                }
              }),
              _vm._v(" "),
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "Icons",
                    icon: "ni ni-planet text-blue",
                    path: "/icons"
                  }
                }
              }),
              _vm._v(" "),
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "Maps",
                    icon: "ni ni-pin-3 text-orange",
                    path: "/maps"
                  }
                }
              }),
              _vm._v(" "),
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "User Profile",
                    icon: "ni ni-single-02 text-yellow",
                    path: "/profile"
                  }
                }
              }),
              _vm._v(" "),
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "Tables",
                    icon: "ni ni-bullet-list-67 text-red",
                    path: "/tables"
                  }
                }
              }),
              _vm._v(" "),
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "Login",
                    icon: "ni ni-key-25 text-info",
                    path: "/login"
                  }
                }
              }),
              _vm._v(" "),
              _c("sidebar-item", {
                attrs: {
                  link: {
                    name: "Register",
                    icon: "ni ni-circle-08 text-pink",
                    path: "/register"
                  }
                }
              })
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-content", attrs: { data: _vm.sidebarBackground } },
        [
          _c("dashboard-navbar"),
          _vm._v(" "),
          _c(
            "div",
            { on: { click: _vm.toggleSidebar } },
            [
              _c(
                "fade-transition",
                {
                  attrs: { duration: 200, origin: "center top", mode: "out-in" }
                },
                [_c("router-view")],
                1
              ),
              _vm._v(" "),
              !_vm.$route.meta.hideFooter ? _c("content-footer") : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/theme/team-4-800x800.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/assets/img/theme/team-4-800x800.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/team-4-800x800.jpg?66618a418175ddf2ac8c47a241d327a8";

/***/ }),

/***/ "./resources/js/components/Comman/DashboardNavbar.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Comman/DashboardNavbar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardNavbar_vue_vue_type_template_id_81c3620e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardNavbar.vue?vue&type=template&id=81c3620e& */ "./resources/js/components/Comman/DashboardNavbar.vue?vue&type=template&id=81c3620e&");
/* harmony import */ var _DashboardNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardNavbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Comman/DashboardNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardNavbar_vue_vue_type_template_id_81c3620e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardNavbar_vue_vue_type_template_id_81c3620e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comman/DashboardNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comman/DashboardNavbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Comman/DashboardNavbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comman/DashboardNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comman/DashboardNavbar.vue?vue&type=template&id=81c3620e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Comman/DashboardNavbar.vue?vue&type=template&id=81c3620e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_template_id_81c3620e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardNavbar.vue?vue&type=template&id=81c3620e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comman/DashboardNavbar.vue?vue&type=template&id=81c3620e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_template_id_81c3620e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNavbar_vue_vue_type_template_id_81c3620e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/ContentFooter.vue":
/*!************************************************!*\
  !*** ./resources/js/layouts/ContentFooter.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentFooter_vue_vue_type_template_id_5b6a2bc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=template&id=5b6a2bc0& */ "./resources/js/layouts/ContentFooter.vue?vue&type=template&id=5b6a2bc0&");
/* harmony import */ var _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=script&lang=js& */ "./resources/js/layouts/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentFooter_vue_vue_type_template_id_5b6a2bc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentFooter_vue_vue_type_template_id_5b6a2bc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/ContentFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/ContentFooter.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/ContentFooter.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/ContentFooter.vue?vue&type=template&id=5b6a2bc0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/layouts/ContentFooter.vue?vue&type=template&id=5b6a2bc0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_5b6a2bc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=template&id=5b6a2bc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/ContentFooter.vue?vue&type=template&id=5b6a2bc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_5b6a2bc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_5b6a2bc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_533aa8e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=533aa8e0& */ "./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_533aa8e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_533aa8e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_533aa8e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=533aa8e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard.vue?vue&type=template&id=533aa8e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_533aa8e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_533aa8e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);