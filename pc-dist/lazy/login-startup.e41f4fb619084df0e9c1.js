(this.webpackJsonp = this.webpackJsonp || []).push([
  [19],
  {
    U96N: function (e, t, a) {},
    zn3J: function (e, t, a) {
      "use strict";
      a.r(t);
      a("iGh7"),
        a("eqHM"),
        a("xDXR"),
        a("WrSY"),
        a("FX2a"),
        a("tPRg"),
        a("dThN");
      var s = a("z0WU"),
        n = (a("XS0u"), a("q1tI")),
        i = a.n(n),
        o = a("i8i4"),
        r = a("Vg22"),
        c = a("wx14"),
        l = a("17x9"),
        h = a.n(l),
        d = a("lCMA");
      i.a.Component;
      var u = a("NDmK"),
        _ = a("ob4H"),
        p = a("fBUP"),
        m = a("X4fA"),
        E = a("Ja3U"),
        g = a("VTBJ"),
        T = a("rePB"),
        N = a("4k7N"),
        R = a.n(N),
        f = a("yUfy"),
        S = a("1pet");
      const C = a("NLsH"),
        { ipcRenderer: I } = C,
        O = () => {
          I.send("login-success");
        },
        y = 1,
        b = "LOGIN_FAIL",
        v = "SECURITY_LOGIN_PASS",
        P = "UPDATE_QUESTION_DATA",
        A = "GET_CAPTCHA",
        L = "SET_QR_IMAGE",
        w = "SET_QR_ERROR_MESSAGE",
        M = "SHOW_LOGIN_QR",
        k = "SHOW_LOGIN_PASS",
        x = "SHOW_REGISTER",
        D = "QR_SHOW_TIPS",
        U = "QR_HIDE_TIPS",
        G = "SET_QR_CURRENT_DATA",
        q = "LOGIN_SUCCESS",
        F = "TOGGLE_CONFIRM",
        K = "TOGGLE_APP_INFO",
        W = "RESET",
        j = "TOGGLE_SENSITIVE_LOGIN",
        V = "SHOW_MOBILE_LOGIN",
        Q = (e) => I.send("login-step", e),
        B = {
          LOGIN_STEP_ENTER_LOGIN_PASS: "4",
          LOGIN_STEP_GET_CAPTCHA_PASS: "4.1",
          LOGIN_STEP_READY_LOGIN_PASS: "4.2",
          LOGIN_STEP_INPUT_EMPTY_INFO_PASS: "4.4",
          LOGIN_STEP_INPUT_INVALID_PHONE_PASS: "4.5",
          LOGIN_STEP_ENTER_LOGIN_QR: "5",
          LOGIN_STEP_GET_QR: "5.1",
          LOGIN_STEP_WAITING_SCAN: "5.2",
          LOGIN_STEP_WAITING_CONFIRM: "5.3",
          SIGNUP_STEP_INPUT_NUMBER: "10.0",
          SIGNUP_STEP_INPUT_NUMBER_NEED_CAPTCHA: "10.1",
          SIGNUP_STEP_EXIST_ACCOUNT: "10.2",
          SIGNUP_STEP_WAIT_SMS_CODE: "10.3",
          SIGNUP_STEP_WAIT_CALL_CODE: "10.4",
          SIGNUP_STEP_WAIT_MANUAL_CODE: "10.5",
          SIGNUP_STEP_UPDATE_PROFILE: "10.6",
          FORGOT_STEP_INPUT_NUMBER: "11.1",
          FORGOT_STEP_INPUT_NUMBER_NEED_CAPTCHA: "11.2",
          FORGOT_STEP_WAIT_SMS_CODE: "11.3",
          FORGOT_STEP_WAIT_CALL_CODE: "11.4",
          FORGOT_STEP_WAIT_MANUAL_CODE: "11.5",
          FORGOT_STEP_SECURITY_QUESTION: "11.6",
          FACEBOOK_STEP_WAIT_BROWSER_RESPONSE: "12.1",
          FACEBOOK_STEP_INPUT_NUMBER: "12.2",
          FACEBOOK_STEP_INPUT_NUMBER_NEED_CAPTCHA: "12.3",
          FACEBOOK_STEP_PHONE_LINKED_LOGIN: "12.4",
          FACEBOOK_STEP_PHONE_LINKED_EDIT_NUMBER: "12.5",
          FACEBOOK_STEP_WAIT_ZALO_CODE: "12.6",
          FACEBOOK_STEP_WAIT_SMS_CODE: "12.7",
          FACEBOOK_STEP_WAIT_CALL_CODE: "12.8",
          FACEBOOK_STEP_WAIT_MANUAL_CODE: "12.9",
          LOGIN_STEP_SUBMIT_OTP: "6.5",
          LOGIN_STEP_SECURITY_QUESTION: "13.0",
          LOGIN_STEP_SECURITY_QUESTION_FAIL: "13.1",
        },
        H = 18010,
        z = -10,
        Y = -100,
        X = -200,
        Z = 18012,
        $ = 18021,
        J = 18029,
        ee = 18015,
        te = 18033;
      var ae = a("c51z"),
        se = a("1ZEA"),
        ne = a("v/qp"),
        ie = a("XD71"),
        oe = "assets/login_img_security.85122757babe46a7f06a3bc55bd1c915.png",
        re = "assets/logo-new.146dfa01c78183631d33b77999a18288.svg",
        ce = a("ptcT"),
        le = a("kEG/");
      function he(e, t) {
        let a = "";
        return e
          ? (e.errorMessageLocalize && (a = e.errorMessageLocalize),
            a ||
              (a = (function (e, t) {
                let a = "";
                switch (e.errorCode) {
                  case le.a.INVALID_FACEBOOK_TOKEN:
                    a = ae.default.str("STR_SIGNIN_ERROR_FACEBOOK_TOKEN");
                    break;
                  case le.a.USER_WAS_BANNED:
                    a = ae.default.str("STR_SIGNIN_ERROR_ACCOUNT_BANNED");
                    break;
                  case le.a.REQUEST_RATE_LIMIT_EXCEEDED:
                    a = ae.default.str(
                      "STR_SIGNIN_ERROR_CAPPED_INCORRECT_ATTEMPTS"
                    );
                    break;
                  case le.a.INVALID_PHONE_NUMBER:
                    a = ae.default.str("STR_SIGNIN_ERROR_INVALID_PHONE_NUMBER");
                    break;
                  case le.a.ACCOUNT_NOT_ACTIVE:
                    a = ae.default.str("STR_SIGNIN_ERROR_UNKNOWN_PHONE_NUMBER");
                    break;
                  case le.a.INVALID_OTP_CODE:
                    a = ae.default.str("STR_SIGNIN_ERROR_INCORRECT_CODE");
                    break;
                  case le.a.INVALID_PHONE_NUMBER_OR_PASSWORD:
                    a =
                      null != t && t.useRecentData
                        ? ae.default.str("STR_SIGNIN_ERROR_INCORRECT_PASSWORD")
                        : ae.default.str(
                            "STR_SIGNIN_ERROR_INCORRECT_PASSWORD_OR_PHONE"
                          );
                    break;
                  case le.a.INVALID_CAPTCHA:
                    a = ae.default.str("STR_SIGNIN_ERROR_INCORRECT_CAPTCHA");
                    break;
                  case le.a.INVALID_PARAM:
                    a = ae.default.str("STR_SIGNIN_ERROR_INVALID_PARAMS");
                    break;
                  case le.a.CAPTCHA_EXPIRED:
                    a = ae.default.str("STR_SIGNIN_ERROR_CAPTCHA_EXPIRED");
                    break;
                  case le.a.CAPTCHA_RETRY_RATE_LIMIT_EXCEEDED:
                    a = ae.default.str(
                      "STR_SIGNIN_ERROR_CAPPED_INCORRECT_CAPTCHAS"
                    );
                    break;
                  case le.a.CAPTCHA_REQUIRED:
                    a = ae.default.str("STR_SIGNIN_ERROR_EMPTY_CAPTCHA");
                    break;
                  case le.a.PROFILE_CREATION_QUOTA_LIMIT_EXCEEDED:
                    a = ae.default.str("STR_SIGNIN_ERROR_CAPPED_REGISTRATIONS");
                    break;
                  case le.a.SMS_QUOTA_LIMIT_EXCEEDED:
                    a = ae.default.str(
                      "STR_SIGNIN_ERROR_CAPPED_SMS_SEND_REQUESTS"
                    );
                    break;
                  case le.a.VOICE_QUOTA_LIMIT_EXCEEDED:
                    a = ae.default.str(
                      "STR_SIGNIN_ERROR_CAPPED_CALL_SEND_REQUESTS"
                    );
                    break;
                  case le.a.SECURITY_QUESTION_REQUIRED:
                    a = ae.default.str("STR_SIGNIN_ERROR_WRONG_ANSWER");
                    break;
                  case le.a.SECURITY_QUESTION_QUOTA_LIMIT_EXCEEDED:
                    a = ae.default.str(
                      "STR_SIGNIN_ERROR_CAPPED_SECURITY_QUESTION"
                    );
                    break;
                  case le.a.ZALO_ACTIVE_CODE_QUOTA_LIMIT_EXCEEDED:
                    a = ae.default.str(
                      "STR_SIGNIN_ERROR_CAPPED_CODE_SEND_REQUESTS"
                    );
                    break;
                  case le.a.OUT_OF_SECQ_QUOTA:
                  case le.a.OUT_OF_SECQ_2_STEP_QUOTA:
                    a = ae.default.str("STR_SECQ_ERROR");
                    break;
                  case S.NetWorkError.NO_NETWORK:
                  case S.NetWorkError.TIMEOUT_SENT:
                  case S.NetWorkError.TIMEOUT:
                    a = ae.default.str("STR_SIGNIN_ERROR_NO_NETWORK");
                }
                return a;
              })(e, t)),
            a)
          : a;
      }
      var de = (function () {
          let e = null;
          return {
            getAuthenticationController: () => {
              var t;
              return (
                e ||
                (e =
                  null === (t = a("X4fA")) || void 0 === t ? void 0 : t.default)
              );
            },
          };
        })().getAuthenticationController,
        ue = a("egaF"),
        _e = a("NGyP"),
        pe = a("O8ue");
      var me = function (e) {
        const {
            checked: t = !1,
            format: a,
            id: s,
            thumb: n,
            title: o,
            onClick: r,
          } = e,
          c = (e) => {
            r && r(e, { id: s, thumb: n, title: o });
          };
        return i.a.createElement(
          "div",
          {
            className: R()(
              "rel",
              "flx flx-al-c",
              "login-pass__questionnaire__questions__item"
            ),
            onClick: c,
          },
          n &&
            i.a.createElement(_e.d, {
              target: { displayName: o, avatar: n },
              size: "l",
            }),
          i.a.createElement("div", { className: R()("name", n && "ml-12") }, o),
          i.a.createElement(pe.a, {
            className: "fl-r",
            checked: t,
            onChange: c,
          })
        );
      };
      var Ee = function (e) {
        var t, a;
        const {
            data: s,
            disabled: n = !1,
            errorMessage: o,
            resetChecked: r = !1,
            onBack: c,
            onAnswerQuestions: l,
            onUpdateCheckedList: h,
          } = e,
          [u, _] = i.a.useState({}),
          p = Object.keys(u).length >= s.answerType;
        let m =
          s.content +
          ` ${ae.default.trans("STR_SECURITY_QUESTION_MESSAGE_SUBTEXT", [
            (null != (t = s.answerType) ? t : 0).toString(),
          ])}`;
        const E = (e, t) => {
            const a = t.id,
              s = Object(g.a)({}, u);
            s[a] ? delete s[a] : (s[a] = Object(g.a)({}, t)), T(s);
          },
          T = (e) => {
            _(e), h && h(e);
          };
        return (
          i.a.useEffect(() => {
            T({});
          }, [r]),
          i.a.createElement(
            "div",
            {
              className: R()(
                "flx",
                "flx-col",
                "flx-1",
                "flx-al-c",
                "login-padding"
              ),
              style: { paddingTop: "16px" },
            },
            i.a.createElement(d.a, {
              className: "sigin-title",
              tagName: "div",
              textKey: "STR_LOGIN_ACCOUNT",
            }),
            i.a.createElement("div", { className: "pw-description" }, m),
            o
              ? i.a.createElement(d.a, {
                  className: R()("error", "text-center", "mt-8", "mb-0"),
                  textKey: o,
                })
              : null,
            i.a.createElement(
              "div",
              {
                id: "listLoginQuestion",
                className: R()("login-pass__questionnaire__questions", "w100"),
              },
              i.a.createElement(
                ue.a,
                {
                  autoHide: !1,
                  className: "login-pass__questionnaire__questions__inner",
                },
                (null != (a = s.choices) ? a : []).map((e) =>
                  i.a.createElement(me, {
                    key: "item_qs_" + e.value,
                    checked: !!u[e.value],
                    format: s.format,
                    id: e.value,
                    thumb: e.thumb,
                    title: e.title,
                    onClick: E,
                  })
                )
              )
            ),
            i.a.createElement(ne.a, {
              className: "login-pass__questionnaire__questions__submit-button",
              disabled: !p || n,
              loading: n,
              onClick: (e) => {
                p && l && l(e, u);
              },
              size: "large",
              textKey: "STR_ANSWER",
            }),
            i.a.createElement("div", { className: "flx-1" }),
            i.a.createElement(ne.a, {
              type: "tertiary-primary",
              onClick: (e) => {
                c && c(e);
              },
              size: "large",
              textKey: "STR_BACK",
            })
          )
        );
      };
      var ge = function (e) {
        const { data: t, dispatch: a, onBack: s, onLoginSuccess: n } = e,
          [o, r] = i.a.useState([]),
          [c, l] = i.a.useState(!1),
          [h, d] = i.a.useState(!1),
          [u, _] = i.a.useState(""),
          p = i.a.useRef(null),
          m = () => {
            null != p.current && (clearTimeout(p.current), (p.current = null));
          },
          E = () => {
            m(),
              (p.current = setTimeout(() => {
                (p.current = null), a && a({ type: b, payload: "" });
              }, 6e5));
          },
          g = (e) => {
            const t = de();
            if (!t) return;
            const s = S.ACTIVE_TYPE_LOGIN,
              n = t.getZaloClientID(),
              {
                phone: i,
                captcha: o,
                captchaToken: r,
                countryCode: c,
                countryIsoCode: l,
              } = e;
            t.verifyPhoneNumberV2(n, i, l, s)
              .then((e) => {
                const { data: s } = e;
                if (s && s.quota_info && s.quota_info.length > 0) {
                  let e = s.quota_info;
                  e.sort((e, t) => e.priority - t.priority);
                  const h = e[0].type;
                  t.getActiveCode(n, i, l, h, r, o, S.ACTIVE_TYPE_LOGIN)
                    .then(() => {
                      --e[0].quota,
                        this.props.dispatch({
                          type: x,
                          payload: {
                            phone: i,
                            countryIsoCode: l,
                            countryCode: c,
                            activeType: S.ACTIVE_TYPE_LOGIN,
                            answerSecurityFail: !0,
                            verifyType: h,
                            quotaInfo: e,
                          },
                        });
                    })
                    .catch((e) => {
                      a && a({ type: b, payload: he(e) });
                    });
                }
              })
              .catch();
          },
          T = (e) => {
            let t = e.errorMessageLocalize;
            !t && e.errorCode && (t = he(e)), _(t), d(!h);
          };
        return (
          i.a.useEffect(
            () => (
              Q(B.LOGIN_STEP_SECURITY_QUESTION),
              E(),
              () => {
                m();
              }
            ),
            []
          ),
          i.a.createElement(Ee, {
            data: t.questionData,
            disabled: c,
            errorMessage: u,
            resetChecked: h,
            onAnswerQuestions: () => {
              l(!0);
              const e = de();
              if (!e) return;
              const s = t.phone,
                i = t.password,
                r = t.captcha,
                c = t.captchaToken,
                h = e.getZaloClientID(),
                d = {
                  question_type: t.questionData.questionType,
                  answer_type: t.questionData.answerType,
                  answers: o.join(","),
                },
                u = { code: t.countryCode, iso: t.countryIsoCode };
              e.loginWithPassword(s, i, r, c, h, 1, d, u)
                .then(() => {
                  l(!1), n && n();
                })
                .catch((e) => {
                  l(!1);
                  ((e, t) => {
                    if (e.errorCode === le.a.SECURITY_QUESTION_REQUIRED) {
                      const s = v,
                        n = {
                          phone: t.phone,
                          password: t.password,
                          captcha: t.captcha,
                          captchaToken: t.captchaToken,
                          countryCode: t.countryCode,
                          countryIsoCode: t.countryIsoCode,
                          eCode: e.errorCode,
                        };
                      e.data && (n.questionData = e.data),
                        T(e),
                        E(),
                        a && a({ type: s, payload: n });
                    } else if (
                      e.errorCode ===
                      le.a.SECURITY_QUESTION_QUOTA_LIMIT_EXCEEDED
                    ) {
                      var s;
                      (null === (s = t.phone) || void 0 === s
                        ? void 0
                        : s.length) > 0 && g(t),
                        E();
                    } else if (e.errorCode === le.a.PASSWORD_NOT_SET) {
                      let s = "";
                      e.data &&
                        e.data.display_name &&
                        (s = String(e.data.display_name)),
                        a &&
                          a({
                            type: x,
                            payload: {
                              phone: t.phone,
                              captcha: t.captcha,
                              captchaToken: t.captchaToken,
                              passwordInvalid: !0,
                              activeType: 3,
                              displayName: s,
                            },
                          });
                    } else
                      e.errorCode === le.a.OUT_OF_SECQ_QUOTA ||
                      e.errorCode === le.a.OUT_OF_SECQ_2_STEP_QUOTA
                        ? a && a({ type: M, payload: { errorMessage: he(e) } })
                        : T(e);
                  })(Object(ce.a)(e), {
                    phone: s,
                    password: i,
                    captcha: r,
                    captchaToken: c,
                    countryCode: u.code,
                    countryIsoCode: u.iso,
                  });
                });
            },
            onBack: s,
            onUpdateCheckedList: (e) => {
              const t = [];
              for (const a in e) e[a] && t.push(a);
              r(t);
            },
          })
        );
      };
      var Te = function (e) {
          const {
              data: t,
              dispatch: a,
              onAnswerSuccess: s,
              onBack: n,
              onBackToPhoneValidation: o,
            } = e,
            [r, c] = i.a.useState([]),
            [l, h] = i.a.useState(!1),
            [d, u] = i.a.useState(!1),
            [_, p] = i.a.useState(""),
            m = i.a.useRef(null),
            E = () => {
              null != m.current &&
                (clearTimeout(m.current), (m.current = null));
            },
            g = () => {
              E(),
                (m.current = setTimeout(() => {
                  (m.current = null), a && a({ type: b, payload: "" });
                }, 6e5));
            };
          return (
            i.a.useEffect(
              () => (
                Q(B.FORGOT_STEP_SECURITY_QUESTION),
                g(),
                () => {
                  E();
                }
              ),
              []
            ),
            i.a.createElement(Ee, {
              data: t.questionData,
              disabled: l,
              errorMessage: _,
              resetChecked: d,
              onAnswerQuestions: () => {
                h(!0);
                const e = de();
                if (!e) return;
                const { userData: n } = t,
                  i = n.phone,
                  c = n.token,
                  l = n.countryCode,
                  _ = n.countryIsoCode,
                  m = {
                    question_type: t.questionData.questionType,
                    answer_type: t.questionData.answerType,
                    answers: r.join(","),
                  },
                  E = { isoCode: _ };
                e.answerSecQWhenResetPassword(i, c, m, E)
                  .then(() => {
                    h(!1), s && s();
                  })
                  .catch((e) => {
                    h(!1);
                    ((e, t) => {
                      const s = e.errorCode;
                      if (s === le.a.SECURITY_QUESTION_REQUIRED) {
                        var n;
                        g(), p(e.errorMessageLocalize), u(!d);
                        const s = x,
                          o = {
                            phone: t.phone,
                            countryCode: t.countryCode,
                            countryIsoCode: t.countryIsoCode,
                            eCode: e.errorCode,
                          };
                        var i;
                        null !== (n = e.data) &&
                          void 0 !== n &&
                          n.question &&
                          (o.questionData =
                            null === (i = e.data) || void 0 === i
                              ? void 0
                              : i.question),
                          a && a({ type: s, payload: o });
                      } else
                        s === le.a.INVALID_RESET_PWD_TOKEN ||
                        s === le.a.RESET_PWD_TOKEN_NOT_FOUND ||
                        s === le.a.RESET_PWD_TOKEN_EXPIRED
                          ? o && o(he(e))
                          : s === le.a.OUT_OF_SECQ_QUOTA ||
                            s === le.a.OUT_OF_SECQ_2_STEP_QUOTA
                          ? (g(),
                            a &&
                              a({ type: M, payload: { errorMessage: he(e) } }))
                          : (p(e.errorMessageLocalize), u(!d));
                    })(Object(ce.a)(e), {
                      phone: i,
                      token: c,
                      countryCode: l,
                      countryIsoCode: _,
                      answerData: m,
                    });
                  });
              },
              onBack: n,
              onUpdateCheckedList: (e) => {
                const t = [];
                for (const a in e) e[a] && t.push(a);
                c(t);
              },
            })
          );
        },
        Ne = a("igA5"),
        Re = a("Mgpg"),
        fe = a("jDHv"),
        Se = a("t3Jo");
      function Ce(e, t) {
        return new Se.b(e, t);
      }
      var Ie = function (e) {
        const { ISOCode: t, phoneNumber: a } = e,
          s = Ce(a, t);
        return i.a.createElement(
          "div",
          { className: "reg-phonenumber" },
          "+",
          s.getCountryCode(),
          " ",
          s.getPhone()
        );
      };
      var Oe = new (class {
        constructor() {
          Object(T.a)(this, "countryCodeMap", new Map()),
            Object(T.a)(this, "data", []),
            Object(T.a)(this, "ISOCodeMap", new Map()),
            this.load();
        }
        getCountryCodeFromISOCode(e) {
          if (!this.ISOCodeMap.has(e)) return -1;
          const t = this.data[this.ISOCodeMap.get(e)];
          return t ? t.country_code : -1;
        }
        getIsoCodeFromCountryCode(e) {
          if (!this.countryCodeMap.has(e)) return "";
          const t = this.data[this.countryCodeMap.get(e)];
          return t ? t.iso_country_code : "";
        }
        load() {
          const e = a("6T4N"),
            t = e.countries.length;
          let s;
          for (let a = 0; a < t; a++)
            (s = e.countries[a]),
              this.data.push(s),
              this.countryCodeMap.set(s.country_code, a),
              this.ISOCodeMap.set(s.iso_country_code, a);
        }
      })();
      var ye = function (e) {
        const { onClickToS: t } = e;
        return i.a.createElement(
          "div",
          { key: "tos", className: "tos-agreement" },
          i.a.createElement(d.a, { textKey: "STR_TOS_TEXT_FIRST" }),
          i.a.createElement(d.a, {
            className: "term-link",
            onClick: t,
            textKey: "STR_TOS_TEXT_SECOND",
          }),
          i.a.createElement(d.a, { textKey: "STR_TOS_TEXT_THIRD" })
        );
      };
      var be = function (e) {
          const {
            checked: t,
            className: a,
            content: s,
            contentRenderer: n,
            id: o,
            onCheck: r,
            shape: c = "square",
          } = e;
          return i.a.createElement(
            "div",
            { className: R()("w-100 flx flx-al-c", a) },
            i.a.createElement(
              "div",
              { className: "flx-centralized mr-8" },
              i.a.createElement(pe.a, {
                checked: t,
                onChange: (e) => {
                  "function" == typeof r && r(e, o, s);
                },
                shape: c,
              })
            ),
            i.a.createElement(
              "div",
              null,
              n || i.a.createElement("div", { className: "flx flx-al-c" }, s)
            )
          );
        },
        ve = a("dbb5");
      function Pe(e) {
        const t = e[Object(ve.a)()];
        if (!t) return i.a.createElement(i.a.Fragment, null);
        let a;
        if (t.args) {
          const e = [];
          let s = t.text;
          for (let a = 0; a < t.args.length; a++) {
            const n = t.args[a],
              o = t.urls && t.urls[a];
            let r;
            r = o
              ? i.a.createElement(
                  "a",
                  { className: "cursor-pointer", href: o, target: "_blank" },
                  n
                )
              : i.a.createElement("span", null, n);
            const c = s.indexOf(`$${a}$`),
              l = s.slice(0, c);
            e.push(i.a.createElement("span", null, l)),
              e.push(r),
              (s = s.slice(c + `$${a}$`.length));
          }
          s && e.push(i.a.createElement("span", null, s)),
            (a = i.a.createElement(i.a.Fragment, null, e));
        } else a = i.a.createElement("span", null, t.text);
        return i.a.createElement("div", null, a);
      }
      function Ae(e) {
        const { terms: t = [], onCheck: a } = e;
        return i.a.createElement(
          i.a.Fragment,
          null,
          t.map((e, t) =>
            null == e
              ? null
              : i.a.createElement(be, {
                  key: e.id,
                  className: R()(0 !== t && "mt-8"),
                  contentRenderer: Pe(e.content),
                  id: e.id,
                  onCheck: a,
                })
          )
        );
      }
      var Le = function (e) {
        var t;
        const { className: a, onTickChanged: s, termsOfServiceData: n } = e,
          o = i.a.useRef({});
        return i.a.createElement(
          "div",
          { className: R()("w-100", a) },
          i.a.createElement("div", null, ae.default.str("STR_TOS_AGREEMENTS")),
          i.a.createElement(
            "div",
            { className: "mt-16" },
            i.a.createElement(Ae, {
              onCheck: (e, t) => {
                if (((o.current[t] = e), "function" == typeof s)) {
                  var a;
                  let e;
                  const t =
                    "string" ==
                      typeof (null === (a = n.GDPR) || void 0 === a
                        ? void 0
                        : a.required) && n.GDPR.required.split("-");
                  if (t)
                    for (let a = 0; a < t.length; a++) {
                      if (!o.current.hasOwnProperty(t[a]) || !o.current[t[a]]) {
                        e = !1;
                        break;
                      }
                      e = !0;
                    }
                  s(Object(g.a)({}, o.current), e);
                }
              },
              terms: null === (t = n.GDPR) || void 0 === t ? void 0 : t.terms,
            })
          )
        );
      };
      const we = fe.ModuleContainer.resolve(Re.ZLoggerFactory).createZLogger(
          "login",
          ["register"]
        ),
        Me = "SMS",
        ke = "VOICE";
      let xe, De, Ue;
      const Ge = new (class {
          check(e, t) {
            var a, s, n;
            if (
              null !== (a = this.cachePhone) &&
              void 0 !== a &&
              a.hasOwnProperty(e) &&
              (null === (s = this.cachePhone[e]) || void 0 === s
                ? void 0
                : s.iso) === t
            )
              return null === (n = this.cachePhone[e]) || void 0 === n
                ? void 0
                : n.error;
            return null;
          }
          pushCachePhone(e, t, a) {
            this.cachePhone || (this.cachePhone = {}),
              (this.cachePhone[e] = { phone: e, iso: t, error: a });
          }
          removeCachePhone(e) {
            this.cachePhone && delete this.cachePhone[e];
          }
        })(),
        qe = 1,
        Fe = 2,
        Ke = 3,
        We = 4,
        je = 0,
        Ve = 1,
        Qe = 2,
        Be = 1,
        He = 2;
      class ze extends i.a.Component {
        constructor(e) {
          super(e),
            Object(T.a)(this, "setCaptchaImage", (e, t) => {
              (this.prevCaptchaImage = this.state.captchaImg),
                e
                  ? this.setState({
                      captchaImg: e,
                      errorMessage:
                        t || ae.default.str("STR_ERR_NEED_INPUT_CAPTCHA"),
                    })
                  : this.setState({ captchaImg: null });
            }),
            Object(T.a)(this, "showSendOTPConfirmPopup", (e) => {
              if (!this.props.dispatch) return;
              const { countryCode: t, phoneNumber: a } = e;
              this.props.dispatch({
                type: F,
                payload: {
                  message: ae.default.trans("STR_CONFIRM_OTP_TEXT", [t, a]),
                  callback: (e) => {
                    e && this._getActiveCode();
                  },
                  confirmText: ae.default.str("STR_CONFIRM"),
                  cancelText: ae.default.str("STR_CLOSE"),
                },
              });
            }),
            Object(T.a)(this, "verifyPhoneNumber", () => {
              this.setState({ errorMessage: null });
              const e = s.default.getRawPhoneNumber(
                this.state.phoneNumber,
                this.state.countryCode
              );
              if (!e) return !1;
              this.setBlocking(!1),
                this.__checkInvalidPhone(e, this.state.countryIsoCode) ||
                  this.callVerifyPhoneNumber(e);
            }),
            Object(T.a)(this, "callVerifyPhoneNumber", (e) => {
              this.setBlocking(!0);
              const t =
                  this.state.activeType === S.ACTIVE_TYPE_LOGIN
                    ? S.ACTIVE_TYPE_REGISTER
                    : this.state.activeType,
                a = {
                  context: He,
                  captchaToken: this.captchaToken,
                  captchaAnswer: this.state.captchaAnswer,
                };
              m.default
                .verifyPhoneNumberV2(
                  this.imei,
                  e,
                  this.state.countryIsoCode,
                  t,
                  a
                )
                .then((t) => {
                  this.setBlocking(!1);
                  const { data: a } = t;
                  we.zsymb(
                    21,
                    9841,
                    30001,
                    "verifyPhoneNumber V2 success {}",
                    a
                  ),
                    this.handleVerifyPhoneNumberSuccess(
                      S.ACTIVE_TYPE_LOGIN,
                      Object(g.a)(
                        Object(g.a)({}, a),
                        {},
                        { phoneNumber: e, countryCode: this.state.countryCode }
                      )
                    );
                })
                .catch((e) => {
                  this.setBlocking(!1),
                    we.zsymb(21, 9841, 30002, "verifyPhoneNumber {}", e),
                    this._handleError(e);
                });
            }),
            Object(T.a)(this, "handleVerifyPhoneNumberSuccess", (e, t) => {
              if (!t) return;
              this.state.captchaImg && this.setCaptchaImage(null);
              const { quota_info: a, manual_sms: s, phone_id: n } = t;
              a &&
                (this.verifyTypes = a.filter((e) => "ZALO" !== e.type) || []),
                null != s && s.hint && this.setManualSmsHint(s.hint),
                n &&
                  (this.encryptedPhoneData = {
                    phoneNumber: t.phoneNumber,
                    phoneId: t.phone_id,
                  });
              const { activated: i } = t;
              e === S.ACTIVE_TYPE_REGISTER
                ? i
                  ? (Q(B.SIGNUP_STEP_EXIST_ACCOUNT),
                    this.setState({
                      errorMessage: ae.default.str(
                        "STR_ERROR_EXISTING_ACCOUNT"
                      ),
                    }))
                  : (t.terms_of_services &&
                      this.setTermsOfService(t.terms_of_services),
                    this.setState({ reviewPhoneNum: !0, errorMessage: null }))
                : i
                ? this.showSendOTPConfirmPopup(t)
                : this.setState({
                    errorMessage: ae.default.str(
                      "STR_SIGNIN_ERROR_UNKNOWN_PHONE_NUMBER"
                    ),
                  });
            }),
            Object(T.a)(this, "onAnswerSeqSuccess", () => {
              this.setState({ step: We });
            }),
            Object(T.a)(this, "onBackToLoginPassword", () => {
              this.props.dispatch({ type: k });
            }),
            Object(T.a)(this, "onBackToPhoneValidation", (e) => {
              this.setState({ step: qe, errorMessage: e });
            }),
            Object(T.a)(this, "onToSTickChanged", (e, t) => {
              t !== this.state.isToSRequirementsMet &&
                this.setState({ isToSRequirementsMet: t });
            }),
            (this.dispatch = e.dispatch);
          let t = this.props.lastData;
          (this.state = {
            step: qe,
            countryCode:
              (e.activeType === S.ACTIVE_TYPE_LOGIN && e.countryCode) ||
              Ue ||
              84,
            countryIsoCode:
              (e.activeType === S.ACTIVE_TYPE_LOGIN && e.countryIsoCode) ||
              De ||
              "VN",
            phoneNumber:
              (e.activeType === S.ACTIVE_TYPE_LOGIN && e.phoneNumber) ||
              xe ||
              "",
            activeCode: "",
            infoMessage: null,
            errorMessage: null,
            captchaImg: "",
            captchaAnswer: "",
            activeType: e.activeType,
            cooldown: 0,
            facebookAvatar: "",
            reviewPhoneNum: !1,
            enableChangePW: !1,
            blocking: !1,
            newPassword: "",
            rules: null,
            blockSubmitOTP: !1,
            otpScreen: je,
            isToSRequirementsMet: !1,
          }),
            t
              ? ((this.passwordInvalid = t.passwordInvalid),
                (this.state.phoneNumber = t.phone),
                (this.state.countryCode = t.countryCode),
                (this.state.countryIsoCode = t.countryIsoCode),
                (this.passwordInvalidName = t.displayName))
              : ((this.passwordInvalid = !1), (this.passwordInvalidName = "")),
            (this.verifyType =
              this.props.verifyType && this.props.verifyType.length > 0
                ? this.props.verifyType
                : null),
            (this.captchaToken = null),
            (this.rateLimited = !1),
            (this.manualSmsHint = null),
            (this.verifyTypes = this.props.verifyTypes
              ? this.props.verifyTypes
              : []),
            (this.imei = m.default.getZaloClientID()),
            (this.newStep = !0),
            (this.encryptedPhoneData = { phoneNumber: "", phoneId: "" }),
            (this.termsOfServiceData = null),
            (this._confirmGetActiveCode =
              this._confirmGetActiveCode.bind(this)),
            (this._getActiveCode = this._getActiveCode.bind(this)),
            (this._validateActiveCode = this._validateActiveCode.bind(this)),
            (this._handlePhoneNumberChange =
              this._handlePhoneNumberChange.bind(this)),
            (this._handleCaptchaAnswerChange =
              this._handleCaptchaAnswerChange.bind(this)),
            (this._handleError = this._handleError.bind(this)),
            (this._onLoginSuccesss = this._onLoginSuccesss.bind(this)),
            (this._getLoginCaptcha = this._getLoginCaptcha.bind(this)),
            (this._onInputType = this._onInputType.bind(this)),
            (this._cooldown = this._cooldown.bind(this)),
            (this._showTermsOfService = this._showTermsOfService.bind(this)),
            (this.allowSendActiveCodeTimestamp = 0);
        }
        componentWillMount() {
          this.state.activeType === S.ACTIVE_TYPE_REGISTER
            ? Q(B.SIGNUP_STEP_INPUT_NUMBER)
            : this.state.activeType === S.ACTIVE_TYPE_LOGIN &&
              Q(B.FORGOT_STEP_INPUT_NUMBER),
            s.default
              .getPasswordRules(this.imei, p.default)
              .then((e) => {
                this.setState({ rules: e });
              })
              .catch((e) => {});
        }
        componentWillReceiveProps(e) {
          e.activeType !== this.state.activeType &&
            (e.activeType === S.ACTIVE_TYPE_REGISTER
              ? Q(B.SIGNUP_STEP_INPUT_NUMBER)
              : e.activeType === S.ACTIVE_TYPE_LOGIN &&
                Q(B.FORGOT_STEP_INPUT_NUMBER),
            this.setState({ activeType: e.activeType })),
            e.lastData &&
              e.lastData !== this.props.lastData &&
              e.lastData.questionData &&
              this.setState({ questionData: e.lastData.questionData });
        }
        componentWillUnmount() {
          (this.unmounted = !0),
            this.state.activeType === S.ACTIVE_TYPE_REGISTER &&
              ((xe = this.state.phoneNumber),
              (De = this.state.countryIsoCode),
              (Ue = this.state.countryCode));
        }
        handleErrorRejectOTPOnStrangeDevice(e) {
          let t;
          if (((this.verifyType = null), e.data.manual_sms)) {
            const a = e.data.manual_sms;
            t =
              this.state.otpScreen === Ve
                ? a.error && a.instruction && `${a.error} ${a.instruction}`
                : a.hint && a.instruction && `${a.hint} ${a.instruction}`;
          }
          t && this.setManualSmsHint(t);
          let a = null;
          this.state.step === Fe && (a = e.errorMessageLocalize),
            this.setState({ otpScreen: Qe }),
            this._showActiveCodeRequestLimitMessage(a);
        }
        handleCaptchaErrors(e) {
          const { data: t, errorCode: a, errorMessageLocalize: s } = e;
          var n;
          (this.state.activeType === S.ACTIVE_TYPE_REGISTER
            ? Q(B.SIGNUP_STEP_INPUT_NUMBER_NEED_CAPTCHA)
            : this.state.activeType === S.ACTIVE_TYPE_LOGIN &&
              Q(B.FORGOT_STEP_INPUT_NUMBER_NEED_CAPTCHA),
          a === le.a.CAPTCHA_REQUIRED)
            ? t &&
              ((this.captchaToken =
                (null === (n = t.captcha) || void 0 === n ? void 0 : n.token) ||
                null),
              this.setCaptchaImage(
                "data:image/png;base64," + t.captcha.captcha_img,
                s
              ))
            : (this.prevCaptchaImage &&
                !this.state.captchaImg &&
                this.setCaptchaImage(this.prevCaptchaImage),
              this.setState({ errorMessage: s }));
        }
        handleTopLevelError(e) {
          if (e.errorCode === le.a.REQUIRE_LOGIN_QR) {
            const t = {};
            return (
              e.data && (t.data = e.data),
              e.errorMessageLocalize &&
                (t.errorMessage = e.errorMessageLocalize),
              this.props.dispatch({ type: M, payload: t })
            );
          }
          if (e.errorCode === le.a.OUT_OF_SECQ_QUOTA)
            return this.props.dispatch({
              type: M,
              payload: { errorMessage: he(e) },
            });
        }
        _handleError(e) {
          const t = Object(ce.a)(e);
          if (0 === t.errorCode) return we.zsymb(18, 9841, 3e4, e);
          if ((this.handleTopLevelError(t), t.errorCode === le.a.REJECTED_OTP))
            return this.handleErrorRejectOTPOnStrangeDevice(t);
          if (
            t.errorCode === le.a.INVALID_CAPTCHA ||
            t.errorCode === le.a.CAPTCHA_EXPIRED ||
            t.errorCode === le.a.CAPTCHA_REQUIRED ||
            t.errorCode === le.a.CAPTCHA_RETRY_RATE_LIMIT_EXCEEDED
          )
            return this.handleCaptchaErrors(t);
          let a = he(t);
          if (
            (t.errorCode === $ &&
              (this.setState({ blockSubmitOTP: !0 }),
              this._blockOTPTimer && clearTimeout(this._blockOTPTimer),
              (this._blockOTPTimer = setTimeout(() => {
                this.setState({ blockSubmitOTP: !1 });
              }, 9e5))),
            t.errorCode !== le.a.INVALID_PARAM ||
              this.state.step !== qe ||
              this.state.captchaImg ||
              (a = ae.default.str("STR_SIGNIN_ERROR_INVALID_PHONE_NUMBER")),
            a ||
              (a =
                t.code === S.NetWorkError.NO_NETWORK
                  ? ae.default.str("STR_SIGNIN_ERROR_NO_NETWORK")
                  : `Error: ${t.errorCode} - ${t.errorMessage}`),
            t && t.blocking_time_left)
          ) {
            let e = Math.round(t.blocking_time_left / 1e3);
            const s = Math.floor(e / 60);
            (e -= 60 * s),
              (a = `${a} ${ae.default.str("STR_RETRY_AFTER")} ${
                s ? s + ` ${ae.default.str("STR_MINS")} ` : ""
              }${e} ${ae.default.str("STR_SECONDS")}.`);
          }
          this.setState({ errorMessage: a });
        }
        _verifyPhoneNumber(e = !1, t = !1) {
          if (this.verifyType) return this._getActiveCode();
          const a = s.default.getRawPhoneNumber(
            this.state.phoneNumber,
            this.state.countryCode
          );
          if (!a) return !1;
          this.setBlocking(!1),
            this.__checkInvalidPhone(a, this.state.countryIsoCode) ||
              (this.setState({ errorMessage: null }),
              this.props.dispatch({
                type: F,
                payload: {
                  message: ae.default.trans("STR_CONFIRM_OTP_TEXT", [
                    this.state.countryCode,
                    a,
                  ]),
                  callback: (t) => {
                    this.props.dispatch({ type: F }),
                      t
                        ? this.callVerifyPhoneNumber(a)
                        : ((this.newStep = !0), e || this.onRegisterBack());
                  },
                  confirmText: e
                    ? ae.default.str("STR_CONFIRM")
                    : ae.default.str("STR_SIGNIN_REGISTER"),
                  cancelText:
                    e && !0 !== t
                      ? ae.default.str("STR_CLOSE")
                      : ae.default.str("STR_LATER"),
                },
              }));
        }
        __showInvalidPhoneErrorCode() {
          setTimeout(() => {
            this.setState({
              errorMessage: ae.default.str(
                "STR_SIGNIN_ERROR_INVALID_PHONE_NUMBER"
              ),
              blocking: !1,
            });
          }, 300);
        }
        __checkInvalidPhone(e, t) {
          let a = Ge.check(e, t);
          return (
            18025 === (null == a ? void 0 : a.error_code) &&
            (this.setState({ blocking: !0, errorMessage: null }),
            this.__showInvalidPhoneErrorCode(),
            a)
          );
        }
        _updateVerifyType() {
          (this.verifyTypes = this.verifyTypes
            .filter((e) => e.quota)
            .sort((e, t) => e.priority - t.priority)),
            this.verifyTypes.length
              ? (this.verifyType = this.verifyTypes[0].type)
              : (this.verifyType = null);
        }
        _canSubmitGetActiveCode() {
          return (
            !!s.default.getRawPhoneNumber(
              this.state.phoneNumber,
              this.state.countryCode
            ) &&
            (!this.captchaToken ||
              (this.state.captchaAnswer && this.state.captchaAnswer.length > 3))
          );
        }
        _confirmGetActiveCode() {
          this.props.dispatch({
            type: F,
            payload: {
              title: "Zalo",
              message: ae.default.str("STR_RESEND_ACTIVATION_CODE_CONFIRM"),
              compact: !0,
              confirmText: ae.default.str("STR_CONFIRM"),
              cancelText: ae.default.str("STR_CANCEL"),
              callback: (e) => {
                this.props.dispatch({ type: F }),
                  e ? this._getActiveCode() : (this.newStep = !0);
              },
            },
          });
        }
        _cooldown() {
          if (this.unmounted) return;
          const e = this.state.cooldown - 1;
          this.setState({ cooldown: e }),
            e > 0 && setTimeout(this._cooldown, 1e3);
        }
        _showActiveCodeRequestLimitMessage(e) {
          (this.rateLimited = !0),
            (this.newStep = !0),
            this.setState({
              infoMessage: this.manualSmsHint,
              errorMessage: null != e ? e : null,
              step: Fe,
            }),
            this.state.activeType === S.ACTIVE_TYPE_REGISTER
              ? Q(B.SIGNUP_STEP_WAIT_MANUAL_CODE)
              : this.state.activeType === S.ACTIVE_TYPE_LOGIN &&
                Q(B.FORGOT_STEP_WAIT_MANUAL_CODE);
        }
        setManualSmsHint(e) {
          this.manualSmsHint = e;
        }
        async _getActiveCode() {
          if (this.state.blocking) return;
          if (
            (this.saveUserToSConfirmedData(),
            this.setState({ errorMessage: null }),
            !this._canSubmitGetActiveCode())
          )
            return;
          const e = this.state.activeType;
          if ((this._updateVerifyType(), !this.verifyType)) {
            let t = !0;
            if (
              e === S.ACTIVE_TYPE_LOGIN &&
              this.encryptedPhoneData.phoneNumber === this.state.phoneNumber &&
              this.encryptedPhoneData.phoneId
            )
              try {
                const e = { context: He },
                  a = await m.default.verifyPhoneExtra(
                    this.encryptedPhoneData.phoneId,
                    e
                  );
                if (a) {
                  const { data: e } = a;
                  e && e.hasOwnProperty("allowOTP") && !e.allowOTP && (t = !1);
                }
              } catch (n) {
                we.zsymb(21, 9841, 30003, "verify phone extra {}", n);
              }
            if (t) return this._showActiveCodeRequestLimitMessage();
          }
          if (e === S.ACTIVE_TYPE_REGISTER)
            switch (this.verifyType) {
              case Me:
                Q(B.SIGNUP_STEP_WAIT_SMS_CODE);
                break;
              case ke:
                Q(B.SIGNUP_STEP_WAIT_CALL_CODE);
            }
          else if (e === S.ACTIVE_TYPE_LOGIN)
            switch (this.verifyType) {
              case Me:
                Q(B.FORGOT_STEP_WAIT_SMS_CODE);
                break;
              case ke:
                Q(B.FORGOT_STEP_WAIT_CALL_CODE);
            }
          const t = s.default.getRawPhoneNumber(
            this.state.phoneNumber,
            this.state.countryCode
          );
          this.setBlocking(!0);
          const a = { context: e === S.ACTIVE_TYPE_REGISTER ? Be : He };
          m.default
            .getActiveCode(
              this.imei,
              t,
              this.state.countryIsoCode,
              this.verifyType || "SMS",
              this.captchaToken,
              this.state.captchaAnswer,
              this.state.activeType,
              a
            )
            .then(() => {
              this.setBlocking(!1),
                (this.newStep = !0),
                this.setState({
                  step: Fe,
                  otpScreen: Ve,
                  errorMessage: null,
                  cooldown: 10,
                }),
                setTimeout(this._cooldown, 1e3),
                this.verifyTypes[0].quota--;
            })
            .catch((e) => {
              this.setBlocking(!1), this._handleError(e);
            });
        }
        _canSubmitValidateActiveCode() {
          const e = this.state.activeCode;
          return !this.state.blockSubmitOTP && e && 6 === e.length;
        }
        _onChangePassword() {
          if (this.state.blocking) return;
          let e = this.pwRef.value,
            t = this.repeatPwRef.value;
          if (t !== e)
            return void this.setState({
              errorMessage: ae.default.str("STR_CONFORM_PW_NOT_MATCH"),
            });
          this.setBlocking(!0);
          let {
            activeType: a,
            phoneNumber: s,
            countryIsoCode: n,
            countryCode: i,
          } = this.state;
          a !== S.ACTIVE_TYPE_REGISTER
            ? m.default
                .loginByResetPassword(
                  s,
                  this.imei,
                  e,
                  t,
                  this.authToken,
                  "+07:00",
                  i,
                  n,
                  ae.default.getCurrentLanguageName()
                )
                .then((e) => {
                  try {
                    we.zsymb(
                      21,
                      9841,
                      30004,
                      "loginByResetPassword success {}",
                      e
                    );
                  } catch (t) {}
                  Ne.a.getInstance().removeItem("FORGOT_PASSWORD"),
                    this.setBlocking(!1),
                    this._onLoginSuccesss();
                })
                .catch((e) => {
                  try {
                    we.zsymb(
                      21,
                      9841,
                      30005,
                      "loginByResetPassword err",
                      JSON.stringify(e)
                    );
                  } catch (t) {}
                  this.setBlocking(!1), this._handleError(e);
                })
            : m.default
                .signUpWithPassword(
                  s,
                  n,
                  e,
                  t,
                  this.imei,
                  this.authToken,
                  "+07:00",
                  ae.default.getCurrentLanguageName()
                )
                .then((e) => {
                  this.setBlocking(!1), this._onLoginSuccesss();
                })
                .catch((e) => {
                  this.setBlocking(!1), this._handleError(e);
                });
        }
        _validateActiveCode() {
          if (this.state.blocking) return;
          this.setState({ errorMessage: null });
          const e = this.state.phoneNumber,
            t = this.state.activeCode;
          if (!this._canSubmitValidateActiveCode()) return;
          const a = Date.now();
          if (this.allowSendActiveCodeTimestamp > a)
            return void this._handleError({
              error_code: 18012,
              data: {
                blocking_time_left: this.allowSendActiveCodeTimestamp - a,
              },
            });
          Q(B.LOGIN_STEP_SUBMIT_OTP);
          let n = this.state.activeType === S.ACTIVE_TYPE_LOGIN;
          this.setBlocking(!0),
            m.default
              .validateActiveCode(
                this.imei,
                e,
                this.state.countryIsoCode,
                this.state.countryCode,
                t,
                "+07:00",
                this.state.activeType,
                n
              )
              .then((e) => {
                this.setBlocking(!1);
                const { data: t } = e || {};
                if (
                  t &&
                  (t.token && (this.authToken = t.token),
                  t.enk && s.default.setDecryptKey(t.enk),
                  1 === t.requireSEQ)
                )
                  return this.showSecurityQuestions(t.question);
                this.onShowUpdatePwState();
              })
              .catch((e) => {
                this.setBlocking(!1),
                  e &&
                    e.data &&
                    e.data.blocking_time_left &&
                    (this.allowSendActiveCodeTimestamp =
                      Date.now() + e.data.blocking_time_left),
                  this._handleError(e);
              });
        }
        _onLoginSuccesss() {
          O();
        }
        _handlePhoneNumberChange(e) {
          this.verifyType && (this.verifyType = null),
            this.setState({
              countryCode: e.countryCode,
              countryIsoCode: e.countryIsoCode,
              phoneNumber: e.phoneNumber,
              errorMessage: null,
            });
        }
        _handleCaptchaAnswerChange(e) {
          this.setState({ captchaAnswer: e.target.value, errorMessage: null });
        }
        _getLoginCaptcha() {
          p.default
            .getLoginCaptcha(m.default.getZaloClientID())
            .then((e) => {
              0 === e.data.error_code &&
                ((this.captchaToken = e.data.data.token),
                this.setState({
                  captchaImg:
                    "data:image/png;base64," + e.data.data.captcha_img,
                }));
            })
            .catch((e) => {
              we.zsymb(21, 9841, 30006, "_getLoginCaptcha error {}", e);
            });
        }
        checkNumberKey(e) {
          let t = e.keyCode;
          return (t > 47 && t < 58) || (t > 95 && t < 112);
        }
        checkPrintableKey(e) {
          let t = e.keyCode;
          return (
            this.checkNumberKey(e) ||
            32 == t ||
            (t > 64 && t < 91) ||
            (t > 185 && t < 193) ||
            (t > 218 && t < 223)
          );
        }
        _onInputType(e) {
          if (13 === e.which)
            this.state.step !== qe ||
            this.state.activeType !== S.ACTIVE_TYPE_LOGIN ||
            this.passwordInvalid
              ? this.state.step === Fe
                ? this._validateActiveCode()
                : this.state.reviewPhoneNum || this.firstVerifyPhoneNumber()
              : this.verifyPhoneNumber();
          else if (this.state.step === Fe) {
            let t = this.state.activeCode,
              a = e.target.selectionStart !== e.target.selectionEnd;
            if (!this.checkPrintableKey(e)) return;
            this.checkNumberKey(e)
              ? a || (t.length > 6 && (e.preventDefault(), e.stopPropagation()))
              : (e.preventDefault(), e.stopPropagation());
          }
        }
        _showTermsOfService(e) {
          e.preventDefault(),
            e.stopPropagation(),
            window.open("http://zalo.me/zalo/dieukhoan/");
        }
        isBackLogin() {
          return this.state.reviewPhoneNum && this.state.step === qe;
        }
        onRegisterBack(e = !1) {
          const t = () => {
            this.isBackLogin()
              ? this.setState({ reviewPhoneNum: !1, errorMessage: "" })
              : this.props.onLogin && this.props.onLogin(),
              this.props.dispatch({ type: W });
          };
          this.state.step !== We
            ? (this.resetTermsOfService(), t())
            : this.props.dispatch({
                type: F,
                payload: {
                  message: ae.default.str(
                    e ? "STR_DISCARD_RESET_PW" : "STR_DISCARD_REGISTER"
                  ),
                  callback: (e) => {
                    e ? t() : this.props.dispatch({ type: F });
                  },
                  confirmText: ae.default.str("STR_CONFIRM"),
                  cancelText: ae.default.str("STR_CLOSE"),
                },
              });
        }
        showSecurityQuestions(e) {
          this.setState({ step: Ke, questionData: e, errorMessage: null });
        }
        onShowUpdatePwState() {
          this.setState({ step: We, errorMessage: null });
        }
        onInputChangePW(e) {
          let t = this.pwRef.value,
            a = this.repeatPwRef.value,
            n = s.default.checkValidPassword(t, "", this.state.rules || []),
            i = s.default.checkValidPassword(a, t, this.state.rules || []),
            o = !!t && !!a && i;
          (this.passwordCheckingMsg = n
            ? o
              ? ""
              : "STR_PASSWORD_DONT_MATCH"
            : "STR_INVALID_PW"),
            this.setState({
              enableChangePW: o,
              errorMessage: null,
              newPassword: t,
            });
        }
        firstVerifyPhoneNumber() {
          if (this.state.blocking) return;
          this.setState({ errorMessage: null });
          let e = s.default.getRawPhoneNumber(
            this.state.phoneNumber,
            this.state.countryCode
          );
          if (
            this.__checkInvalidPhone(
              this.state.phoneNumber,
              this.state.countryIsoCode
            )
          )
            return;
          if (!e)
            return (
              Ge.pushCachePhone(
                this.state.phoneNumber,
                this.state.countryIsoCode,
                { error_code: 18025 }
              ),
              void this.__showInvalidPhoneErrorCode()
            );
          this.setBlocking(!0);
          const t = {
            context: Be,
            captchaToken: this.captchaToken,
            captchaAnswer: this.state.captchaAnswer,
          };
          m.default
            .verifyPhoneNumberV2(
              this.imei,
              e,
              this.state.countryIsoCode,
              S.ACTIVE_TYPE_REGISTER,
              t
            )
            .then((e) => {
              this.setBlocking(!1);
              const { data: t } = e;
              we.zsymb(
                3,
                9841,
                30007,
                "first verifyPhoneNumberV2 success {}",
                t
              ),
                this.handleVerifyPhoneNumberSuccess(S.ACTIVE_TYPE_REGISTER, t);
            })
            .catch((e) => {
              this.setBlocking(!1),
                we.zsymb(3, 9841, 30008, "first verifyPhoneNumberV2 {}", e),
                this._handleError(e);
            });
        }
        setBlocking(e = !0) {
          this.setState({ blocking: e });
        }
        isToSRequirementsMet() {
          return !this.termsOfServiceData || this.state.isToSRequirementsMet;
        }
        setTermsOfService(e) {
          this.termsOfServiceData = e;
        }
        resetTermsOfService() {
          (this.termsOfServiceData = null),
            this.setState({ isToSRequirementsMet: !1 });
        }
        saveUserToSConfirmedData() {
          if (this.termsOfServiceData && this.state.isToSRequirementsMet) {
            const { GDPR: e } = this.termsOfServiceData;
            if (e && e.data) {
              const t = Ce(
                this.state.phoneNumber,
                Oe.getIsoCodeFromCountryCode(this.state.countryCode)
              );
              let a = `+${t.getCountryCode()}${t.getPhone()}`;
              Ne.a
                .getInstance()
                .setItem(
                  S.RegisterLocalStorageKeys.TOS_CONFIRMED_DATA,
                  JSON.stringify(
                    Object(g.a)(Object(g.a)({}, e.data), {}, { phoneNumber: a })
                  )
                );
            }
          }
        }
        render() {
          let e = null;
          const t = (e) => {
            const { fgPage: t } = e;
            return i.a.createElement(
              "div",
              { className: "w-100 flx-centralized" },
              i.a.createElement(ne.a, {
                type: "tertiary-neutral",
                onClick: (e) => this.onRegisterBack(t),
                size: "large",
                textKey: "STR_CANCEL",
              })
            );
          };
          let a, s;
          this.state.captchaImg &&
            ((s = i.a.createElement(
              "div",
              { className: "z-input flx-1" },
              i.a.createElement(se.a, {
                required: !0,
                textKey: "STR_INPUT_CAPTCHA",
                className: "login-pass__group__captcha",
                inputRef: (e) => {
                  e &&
                    this.newStep &&
                    this.verifyType &&
                    (e.focus(), (this.newStep = !1));
                },
                name: "captcha",
                type: "text",
                maxLength: "16",
                value: this.state.captchaAnswer,
                onChange: this._handleCaptchaAnswerChange,
                onKeyPress: this._onInputType,
              })
            )),
            (a = i.a.createElement(
              "div",
              {
                className:
                  "login-pass__group flx captcha-section w100 flx flx-al-c",
              },
              s,
              i.a.createElement(
                "div",
                {
                  id: "captcha",
                  className: "login-pass__captcha flx flx-al-c",
                },
                i.a.createElement("img", {
                  src: this.state.captchaImg,
                  alt: "captcha",
                }),
                i.a.createElement(
                  "div",
                  { className: "dib login-pass__captcha__refresh" },
                  i.a.createElement("i", {
                    className: "fa fa-reload btn",
                    onClick: this._getLoginCaptcha,
                  })
                )
              )
            )));
          let n = { marginTop: "24px", width: "100%" };
          if (this.state.step === qe) {
            let s,
              o = null,
              r = null,
              c = null,
              l = i.a.createElement(d.a, {
                textKey: "STR_CREATE_NEW_ACCOUNT",
                tagName: "div",
                className: "register-title",
              }),
              h = this.passwordInvalid || this._canSubmitGetActiveCode(),
              u = null;
            if (
              (this.state.activeType === S.ACTIVE_TYPE_LOGIN
                ? this.passwordInvalid
                  ? (s = i.a.createElement(
                      "p",
                      null,
                      i.a.createElement(d.a, { textKey: "STR_HI" }),
                      " ",
                      i.a.createElement(
                        "strong",
                        null,
                        this.passwordInvalidName
                      ),
                      ", ",
                      i.a.createElement(d.a, {
                        textKey: "STR_INVALID_PASSWORD_MESSAGE",
                      })
                    ))
                  : ((o = i.a.createElement(d.a, {
                      textKey: "STR_ENTER_PHONE_FOR_ACTIVATION_CODE",
                      tagName: "div",
                      className: "register-desc",
                    })),
                    (l = i.a.createElement(d.a, {
                      textKey: "STR_PASSWORD_RECOVERY",
                      tagName: "div",
                      className: "register-title",
                    })),
                    (u = i.a.createElement(ne.a, {
                      size: "large",
                      textKey: "STR_CONTINUE",
                      onClick: () => this.verifyPhoneNumber(),
                      disabled: !h || this.state.blocking,
                      style: n,
                      loading: this.state.blocking,
                    })))
                : this.state.reviewPhoneNum &&
                  (this.termsOfServiceData
                    ? ((c = i.a.createElement(Le, {
                        className: "mt-16",
                        onTickChanged: this.onToSTickChanged,
                        termsOfServiceData: this.termsOfServiceData,
                      })),
                      (h = h && this.isToSRequirementsMet()),
                      a && (n.marginTop = "16px"))
                    : (c = i.a.createElement(ye, {
                        onClickToS: this._showTermsOfService,
                      }))),
              !u)
            )
              if (this.state.reviewPhoneNum)
                u = i.a.createElement(ne.a, {
                  disabled: !h || this.state.blocking,
                  format: "full-width",
                  loading: this.state.blocking,
                  onClick: () => this._getActiveCode(),
                  size: "large",
                  style: n,
                  textKey:
                    this.state.activeType === S.ACTIVE_TYPE_REGISTER
                      ? "STR_REGISTER_NEW_ACCOUNT"
                      : "STR_CONTINUE",
                });
              else {
                let e = !0,
                  t = 6;
                84 === this.state.countryCode && (t = 9),
                  (this.state.blocking ||
                    !this.state.phoneNumber ||
                    this.state.phoneNumber.length < t) &&
                    (e = !1),
                  (u = i.a.createElement(ne.a, {
                    size: "large",
                    textKey: "STR_CONTINUE",
                    onClick: (e) => this.firstVerifyPhoneNumber(),
                    disabled: !e,
                    style: n,
                    loading: this.state.blocking,
                  }));
              }
            e = i.a.createElement(
              "div",
              {
                className:
                  "login-pass reg-padding flx flx-1 flx-col flx-al-c " +
                  (this.state.activeType === S.ACTIVE_TYPE_LOGIN
                    ? " register-page"
                    : ""),
              },
              i.a.createElement("img", { src: re, className: "sign-in-logo" }),
              l,
              o ||
                i.a.createElement(d.a, {
                  textKey: this.state.reviewPhoneNum
                    ? "STR_REVIEW_REGISTER_PHONE_NUMBER"
                    : "STR_CREATE_ACCOUNT_CONFIRM_TXT",
                  tagName: "div",
                  className: "register-desc",
                }),
              this.state.activeType !== S.ACTIVE_TYPE_REGISTER
                ? this.passwordInvalid
                  ? i.a.createElement("img", {
                      src: oe,
                      style: { marginTop: "20px", marginBottom: "32x" },
                    })
                  : ""
                : null,
              r,
              s &&
                i.a.createElement(
                  "div",
                  {
                    style: { marginTop: r ? "" : "34px" },
                    className: "info-message",
                  },
                  s
                ),
              !this.passwordInvalid &&
                (this.state.reviewPhoneNum
                  ? i.a.createElement(Ie, {
                      ISOCode: Oe.getIsoCodeFromCountryCode(
                        this.state.countryCode
                      ),
                      phoneNumber: this.state.phoneNumber,
                    })
                  : i.a.createElement(f.a, {
                      ref: (e) => (this._phoneInput = e),
                      onKeyPress: this._onInputType,
                      inputRef: (e) => {
                        e &&
                          this.newStep &&
                          !this.verifyType &&
                          (e.focus(), (this.newStep = !1));
                      },
                      value: this.state.phoneNumber,
                      countryCode: this.state.countryCode,
                      countryIsoCode: this.state.countryIsoCode,
                      onChange: this._handlePhoneNumberChange,
                      phoneNumber: this.state.phoneNumber,
                      borderBottomOnly: !0,
                    })),
              c,
              a,
              this.state.errorMessage
                ? i.a.createElement(
                    "div",
                    {
                      className: "error-message",
                      style: { minHeight: "40px" },
                    },
                    this.state.errorMessage
                  )
                : null,
              u,
              i.a.createElement("div", { className: "flx-1" }),
              i.a.createElement(t, { fgPage: !1 })
            );
          } else if (this.state.step === Fe) {
            let a = null;
            switch (this.verifyType) {
              case "ZALO":
                a = i.a.createElement(d.a, {
                  textKey: "STR_VERIFY_ZALO",
                  className: "reg-active-code-desc",
                  tagName: "div",
                });
                break;
              case "SMS":
                a = i.a.createElement(
                  "div",
                  { className: "reg-active-code-desc" },
                  i.a.createElement(d.a, {
                    textKey: "STR_VERIFY_ACCOUNT_DESC",
                  }),
                  " ",
                  i.a.createElement(
                    "span",
                    { className: "act-phone-num" },
                    "(+",
                    this.state.countryCode,
                    ") ",
                    this.state.phoneNumber
                  )
                );
                break;
              case "VOICE":
                a = i.a.createElement(d.a, {
                  textKey: "STR_VERIFY_CALL",
                  className: "reg-active-code-desc",
                  tagName: "div",
                });
                break;
              default:
                a = i.a.createElement(
                  "div",
                  { className: "reg-active-code-desc" },
                  this.state.infoMessage
                );
            }
            const s = this._canSubmitValidateActiveCode();
            e = i.a.createElement(
              "div",
              {
                className: "login-pass reg-padding flx flx-1 flx-col flx-al-c",
              },
              i.a.createElement("img", { src: re, className: "sign-in-logo" }),
              i.a.createElement(d.a, {
                textKey: "STR_VERIFY_ACCOUNT",
                tagName: "div",
                className: "register-title",
              }),
              this.passwordInvalid
                ? i.a.createElement("img", {
                    src: oe,
                    style: { marginTop: "20px", marginBottom: "12px" },
                  })
                : "",
              a,
              i.a.createElement(
                "div",
                {
                  className: "error-message",
                  style: { marginBottom: "0", marginTop: "16px" },
                },
                this.state.errorMessage
              ),
              i.a.createElement(
                "div",
                {
                  className: "z-input w100",
                  id: "regActiveCode",
                  onClick: () => {
                    this.activeCodeRef && this.activeCodeRef.focus();
                  },
                },
                i.a.createElement("input", {
                  required: !0,
                  ref: (e) => {
                    e && this.newStep && (e.focus(), (this.newStep = !1)),
                      (this.activeCodeRef = e);
                  },
                  disabled: this.state.blockSubmitOTP,
                  name: "activecode",
                  className: "active-code-v2",
                  type: "text",
                  onKeyDown: this._onInputType,
                  onChange: (e) => {
                    var t;
                    this.setState({
                      activeCode:
                        (null === (t = e.target) || void 0 === t
                          ? void 0
                          : t.value) || "",
                      errorMessage: null,
                    });
                  },
                  placeholder: ae.default.str("STR_ACTIVATION_CODE"),
                  maxLength: 6,
                })
              ),
              i.a.createElement(ne.a, {
                textKey: "STR_CONTINUE",
                size: "large",
                onClick: this._validateActiveCode,
                disabled: !s || this.state.blocking,
                style: { marginTop: "28px", width: "100%" },
                loading: this.state.blocking,
              }),
              this.state.cooldown > 0 &&
                i.a.createElement(
                  "div",
                  {
                    style: { color: "var(--text-primary)" },
                    className: "reg-act-resend-spacing",
                  },
                  i.a.createElement(d.a, {
                    textKey: "STR_ACTIVATION_CODE_TEXT",
                    style: { marginRight: "5px" },
                  }),
                  this.state.cooldown,
                  i.a.createElement(d.a, {
                    textKey: "STR_SECOND",
                    style: { marginLeft: "5px" },
                  }),
                  "."
                ),
              !this.rateLimited &&
                !this.state.cooldown &&
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(d.a, {
                    textKey: "STR_NOT_RECEIVE_ACTIVE_CODE",
                    className: "reg-active-code-desc reg-act-resend-spacing",
                  }),
                  i.a.createElement(ne.a, {
                    textKey: "STR_RESEND_CODE",
                    onClick: this._confirmGetActiveCode,
                    type: "tertiary-primary",
                    icon: "outline-reload",
                    className: "reg-act-resend-spacing",
                    disabled: this.state.blocking,
                  })
                ),
              i.a.createElement("div", { className: "flx-1" }),
              i.a.createElement(t, { fgPage: !1 })
            );
          } else if (this.state.step === Ke) {
            const t = {
              userData: {
                phone: this.state.phoneNumber,
                token: this.authToken,
                countryCode: this.state.countryCode,
                countryIsoCode: this.state.countryIsoCode,
              },
              questionData: this.state.questionData,
            };
            e = i.a.createElement(Te, {
              data: t,
              dispatch: this.props.dispatch,
              onAnswerSuccess: this.onAnswerSeqSuccess,
              onBack: this.onBackToLoginPassword,
              onBackToPhoneValidation: this.onBackToPhoneValidation,
            });
          } else
            this.state.step === We &&
              (e = i.a.createElement(
                "div",
                {
                  className:
                    "login-pass reg-padding flx flx-1 flx-col flx-al-c register-page",
                },
                i.a.createElement("img", {
                  src: re,
                  className: "sign-in-logo",
                }),
                i.a.createElement(d.a, {
                  textKey:
                    3 === this.state.activeType
                      ? "STR_UPDATE_LOGIN_PASSWORD"
                      : "STR_CREATE_LOGIN_PASSWORD",
                  tagName: "div",
                  className: "register-title",
                }),
                i.a.createElement(
                  "div",
                  { style: { marginTop: "12px" } },
                  i.a.createElement(d.a, {
                    textKey: "STR_NOTE",
                    className: "bold",
                  }),
                  " ",
                  i.a.createElement(d.a, {
                    textKey: "STR_CREATE_NEW_PW_DESCRIPTION",
                    className: "info-message",
                  })
                ),
                i.a.createElement(ie.a, {
                  textKey: "STR_NEW_PASSWORD",
                  inputRef: (e) => (this.pwRef = e),
                  domRef: this.pwRef,
                  className: "w100 flx-init",
                  style: { marginTop: "20px" },
                  onChange: this.onInputChangePW.bind(this),
                  onKeyPress: (e) => {
                    13 === (null == e ? void 0 : e.which) &&
                      (this._onChangePassword(), e.stopPropagation());
                  },
                }),
                i.a.createElement(ie.a, {
                  textKey: "STR_CONFIRM_NEW_PASSWORD",
                  inputRef: (e) => (this.repeatPwRef = e),
                  domRef: this.repeatPwRef,
                  className: "w100 flx-init",
                  style: { marginTop: "16px" },
                  onChange: this.onInputChangePW.bind(this),
                  onKeyPress: (e) => {
                    13 === (null == e ? void 0 : e.which) &&
                      (this._onChangePassword(), e.stopPropagation());
                  },
                  compareValue: this.state.newPassword,
                }),
                this.state.errorMessage
                  ? i.a.createElement(
                      "div",
                      {
                        className: "error-message",
                        style: { marginBottom: "0", marginTop: "16px" },
                      },
                      this.state.errorMessage
                    )
                  : null,
                i.a.createElement(ne.a, {
                  size: "large",
                  textKey: "STR_CONFIRM",
                  onClick: this._onChangePassword.bind(this),
                  disabled: !this.state.enableChangePW || this.state.blocking,
                  style: n,
                  loading: this.state.blocking,
                  title: this.passwordCheckingMsg,
                }),
                i.a.createElement("div", { className: "flx-1" }),
                i.a.createElement(t, {
                  fgPage: this.state.activeType !== S.ACTIVE_TYPE_REGISTER,
                })
              ));
          return e;
        }
      }
      var Ye = ze,
        Xe = a("qhFK"),
        Ze = a("bsME"),
        $e = a("h0sc"),
        Je = a("MEZx"),
        et = a("iQAb"),
        tt = a("3xbP");
      const at = { windowId: tt.c, name: "LOGIN_PW_POPUP" };
      class st extends i.a.Component {
        constructor(e) {
          super(e),
            Object(T.a)(this, "resetErrorMessage", () => {
              this._showErrorMessage("");
            }),
            (this.dispatch = e.dispatch),
            (this.visibleComponentName = this.props.visibleComponentName),
            (this.timeoutAutoReqCapcha = null);
          let t = e.recentdata,
            a = {
              phoneNumber: e.state.phoneNumber,
              countryCode: e.state.countryCode,
              countryIsoCode: "VN",
              selectCountry: !1,
              avatar: null,
              timeout: 0,
              confirmTimeout: 0,
              showCaptcha: !1,
              enableRequestLogin:
                e.state.phoneNumber && e.state.phoneNumber.length >= 6,
              showRequestLoginTooltip:
                e.state.phoneNumber && e.state.phoneNumber.length >= 6,
              enablePasswordLogin: !1,
              showPopupLogin: !1,
              isRemember: e.isRemember,
              enableRetry: !1,
              showLoading: !1,
              blocking: !1,
              menuShown: !1,
            };
          t &&
            ((a.phoneNumber = t.phone),
            (a.avatar = t.avatar),
            (a.displayName = t.displayName),
            (a.countryIsoCode = t.iso),
            (a.countryCode = t.code),
            a.avatar &&
              ((a.enableRequestLogin = !0), (a.showRequestLoginTooltip = !0))),
            (this.state = a),
            (this.toFocus = "phone"),
            (this.isLoginSuccess = !1),
            (this.countLoginFail = 0),
            (this.getLoginCaptcha = this._getLoginCaptcha.bind(this)),
            (this._signIn = this._signIn.bind(this)),
            (this._onTypeCaptcha = this._onTypeCaptcha.bind(this)),
            (this._handlePhoneNumberChange =
              this._handlePhoneNumberChange.bind(this)),
            (this._handlePasswordChange =
              this._handlePasswordChange.bind(this)),
            (this._handleBackButtonClick =
              this._handleBackButtonClick.bind(this)),
            (this._handleCaptchaChange = this._handleCaptchaChange.bind(this));
        }
        componentWillMount() {
          this.state.avatar || this._getLoginCaptcha();
        }
        componentWillReceiveProps(e) {
          if (
            (this.props.state.phoneNumber !== e.state.phoneNumber &&
              this.setState({ phoneNumber: e.state.phoneNumber }),
            this.props.recentdata !== e.recentdata &&
              this.props.recentdata &&
              !e.recentdata)
          ) {
            const t = {
              avatar: null,
              enablePasswordLogin: !1,
              enableRetry: !1,
              isRemember: e.isRemember,
            };
            this._requireCaptcha
              ? ((t.showCaptcha = !0),
                (t.showRequestLoginTooltip = !0),
                (t.enableRequestLogin = !0))
              : ((t.showCaptcha = !1),
                (t.phoneNumber = ""),
                (t.countryIsoCode = "VN"),
                (t.countryCode = 84),
                (t.showRequestLoginTooltip = !1),
                (t.enableRequestLogin = !1)),
              this.setState(t),
              this._getLoginCaptcha(),
              (this.toFocus = "phone"),
              this._password &&
                ((this._password.value = ""),
                this.setState({ enablePasswordLogin: !1 }));
          } else
            !this.props.isVisible && e.isVisible
              ? this._getLoginCaptcha()
              : e !== this.props.isRemember &&
                this.setState({ isRemember: e.isRemember });
        }
        componentDidMount() {
          $e.ModalManagerV2.addModal(at),
            $e.ModalManagerV2.subscribeTriggers(
              Object(g.a)(
                Object(g.a)({}, at),
                {},
                {
                  trigger: (e) => {
                    this.setState({ showPopupLogin: e });
                  },
                }
              )
            ),
            ae.default.callUpdate(this.resetErrorMessage);
        }
        componentWillUpdate(e) {
          e.state.captchaToken || this.state.avatar || this._getLoginCaptcha();
        }
        componentDidUpdate(e) {
          this.props.state.captchaImg !== e.state.captchaImg &&
            this._captcha &&
            document.activeElement !== this._captcha &&
            (this._captcha.value = "");
        }
        componentWillUnmount() {
          $e.ModalManagerV2.delModal(at),
            ae.default.removeUpdate(this.resetErrorMessage);
        }
        get Logger() {
          return (
            this._Logger ||
              (this._Logger = fe.ModuleContainer.resolve(
                Re.ZLoggerFactory
              ).createZLogger("login", ["login-pwd"])),
            this._Logger
          );
        }
        _successLogin() {
          (this.isLoginSuccess = !0), O();
        }
        _failLogin(e) {
          2 == this.countLoginFail
            ? ((this.countLoginFail = 0),
              $e.ModalManagerV2.openModal(
                Object(g.a)(Object(g.a)({}, at), {}, { params: !0 })
              ))
            : this.countLoginFail++;
          let t = ae.default.str("STR_SIGNIN_ERROR_INCORRECT_INFO"),
            a = !1;
          if (
            "ERR_CONNECTION_TIMED_OUT" === e.error_code ||
            "ERR_CONNECTION_TIMED_OUT" === e ||
            "ERR_CONNECTION_TIMED_OUT" === e.code
          )
            t = ae.default.str("STR_COMPOSE_TIP_69");
          else if (e.error_code) {
            let s = he(e, this.state);
            s && (t = s),
              (a = 18029 === e.error_code),
              18017 === e.error_code &&
                this._password &&
                ((this._password.value = ""),
                this.setState({ enablePasswordLogin: !1 }));
          }
          this._showErrorMessage(t),
            this._getLoginCaptcha(!0),
            Q(B.LOGIN_STEP_INPUT_INVALID_PHONE_PASS),
            a &&
              this.props.signInAnother &&
              ((this._requireCaptcha = !0),
              this.props.signInAnother(!1),
              this.setState({ showCaptcha: !0 }));
        }
        _showErrorMessage(e) {
          this.dispatch({ type: b, payload: e });
        }
        _signIn() {
          const e = () => {
              setTimeout(() => {
                this.setState({ blocking: !1 });
              }, 300);
            },
            t = Ne.a.getInstance();
          this.setState({ blocking: !0 }, () => {
            "activeElement" in document && document.activeElement.blur();
            const a = Date.now();
            if (this.lastSignIn && a - this.lastSignIn < 700) return void e();
            this.lastSignIn = a;
            const s = !this._captcha || !this._captcha.value;
            if (!this.state.phoneNumber) {
              (this.toFocus = "phone"),
                this._showErrorMessage(
                  ae.default.str("STR_SIGNIN_ERROR_EMPTY_PHONE")
                );
              let t = B.LOGIN_STEP_INPUT_EMPTY_INFO_PASS + "_Phone";
              return (
                (!this._password.value || (!this.state.avatar && s)) &&
                  (this._password.value || this.state.avatar || !s
                    ? this._password.value
                      ? (t += "Cap")
                      : (t += "Pass")
                    : (t += "AllEmpty")),
                Q(t),
                void e()
              );
            }
            if (!this._password.value) {
              (this.toFocus = "password"),
                this._showErrorMessage(
                  ae.default.str("STR_SIGNIN_ERROR_EMPTY_PASSWORD")
                );
              let e = B.LOGIN_STEP_INPUT_EMPTY_INFO_PASS + "_Pass";
              return s && (e += "Cap"), void Q(e);
            }
            if (!this.state.avatar && s)
              return (
                (this.toFocus = "captcha"),
                this._showErrorMessage(
                  ae.default.str("STR_SIGNIN_ERROR_EMPTY_CAPTCHA")
                ),
                Q(B.LOGIN_STEP_INPUT_EMPTY_INFO_PASS + "_Cap"),
                void e()
              );
            let n = m.default;
            const i = u.default.authDomain;
            Q(B.LOGIN_STEP_LOGIN_PASS),
              n
                .loginWithPassword(
                  this.state.phoneNumber,
                  this._password.value,
                  this.state.avatar
                    ? ""
                    : this._captcha
                    ? this._captcha.value
                    : "",
                  this.props.state.captchaToken,
                  m.default.getZaloClientID(),
                  0,
                  null,
                  {
                    code: this.state.countryCode,
                    iso: this.state.countryIsoCode,
                  }
                )
                .then(() => {
                  t.removeItem("FORGOT_PASSWORD"),
                    setTimeout(() => {
                      Ze.a.onSucess();
                    }, 0),
                    this._successLogin();
                })
                .catch((a) => {
                  if (
                    (this.Logger.zsymb(
                      21,
                      11655,
                      3e4,
                      "signIn failed {}",
                      (a && (a.error_code || a.code)) || a
                    ),
                    a)
                  ) {
                    if ("ERR_NO_NETWORK" === a.code)
                      return (
                        setTimeout(() => {
                          Ze.a.onError("ERR_NO_NETWORK", i);
                        }, 0),
                        this._showErrorMessage(
                          ae.default.str("STR_SIGNIN_ERROR_NO_NETWORK")
                        ),
                        void e()
                      );
                    if (
                      a.error_code &&
                      a.error_code === le.a.SECURITY_QUESTION_REQUIRED &&
                      a.data
                    )
                      setTimeout(() => {
                        Ze.a.onSucess();
                      }, 0),
                        this.Logger.zsymb(3, 11655, 30001, "re security {}", a),
                        a.data.cptch_cert &&
                          t.setItem("captcha_cert", a.data.cptch_cert),
                        this.dispatch({
                          type: v,
                          payload: {
                            phone: this.state.phoneNumber,
                            password: this._password
                              ? this._password.value
                              : "",
                            captcha: a.data.cptch_cert
                              ? null
                              : this._captcha
                              ? this._captcha.value
                              : "",
                            captchaToken: a.data.cptch_cert
                              ? null
                              : this.props.state.captchaToken,
                            questionData: a.data,
                            countryCode: this.state.countryCode,
                            countryIsoCode: this.state.countryIsoCode,
                            eCode: a.error_code,
                          },
                        });
                    else if (
                      a.error_code &&
                      a.error_code === le.a.PASSWORD_NOT_SET
                    ) {
                      setTimeout(() => {
                        Ze.a.onSucess();
                      }, 0);
                      let e = this.state.phoneNumber;
                      a.data &&
                        a.data.display_name &&
                        (e = String(a.data.display_name)),
                        (this.lastVisibleLoginComponentName =
                          this.visibleComponentName),
                        this.dispatch({
                          type: x,
                          payload: {
                            phone: this.state.phoneNumber,
                            captcha: this._captcha ? this._captcha.value : "",
                            captchaToken: this.props.state.captchaToken,
                            passwordInvalid: !0,
                            activeType: 3,
                            displayName: e,
                            countryCode: this.state.countryCode,
                            countryIsoCode: this.state.countryIsoCode,
                          },
                        });
                    } else if (
                      !a.error_code ||
                      (a.error_code !== le.a.OUT_OF_SECQ_QUOTA &&
                        a.error_code !== le.a.OUT_OF_SECQ_2_STEP_QUOTA)
                    )
                      if (
                        !a.error_code ||
                        (a.error_code !==
                          le.a.SENSITIVE_FLOW_REQUIRE_OTP_OR_CONFIRM_MOBILE &&
                          a.error_code !== le.a.SENSITIVE_FLOW_REQUIRE_OTP)
                      )
                        this._isRecycleSimOrChangedPhone(a) ||
                          this._failLogin(a);
                      else {
                        const e = a.data.cptch_cert
                            ? null
                            : this.props.state.captchaToken,
                          t = a.data.cptch_cert
                            ? null
                            : this._captcha
                            ? this._captcha.value
                            : "";
                        this.props.dispatch({
                          type: j,
                          payload: {
                            phone: this.state.phoneNumber,
                            password: this._password
                              ? this._password.value
                              : "",
                            captchaAnswer: t,
                            captchaToken: e,
                            questionData: a.data,
                            countryCode: this.state.countryCode,
                            countryIsoCode: this.state.countryIsoCode,
                            eCode: a.error_code,
                          },
                        });
                      }
                    else {
                      const e = Object(ce.a)(a),
                        t = {};
                      e.data && (t.data = e.data),
                        e.errorMessageLocalize && (t.errorMessage = he(e)),
                        this.props.dispatch({ type: M, payload: t });
                    }
                  }
                  e();
                });
          });
        }
        _getLoginCaptcha(e = !1) {
          this.props.isVisible && Q(B.LOGIN_STEP_GET_CAPTCHA_PASS);
          const t = (e) => {
            (e ||
              (this.props.isMaybeReq &&
                this.props.isMaybeReq(this.visibleComponentName) &&
                !this.timeoutAutoReqCapcha)) &&
              (this.Logger.zsymb(3, 11655, 30002, "req capcha login"),
              e &&
                this.timeoutAutoReqCapcha &&
                (clearTimeout(this.timeoutAutoReqCapcha),
                (this.timeoutAutoReqCapcha = null)),
              p.default
                .getLoginCaptcha(m.default.getZaloClientID())
                .then((e) => {
                  if (0 == e.data.error_code)
                    return (
                      this.props.isVisible && Q(B.LOGIN_STEP_READY_LOGIN_PASS),
                      this.isLoginSuccess ||
                        (this.timeoutAutoReqCapcha = setTimeout(() => {
                          (this.timeoutAutoReqCapcha = null), t();
                        }, 1e3 * e.data.data.expiration_time)),
                      this.dispatch({ type: A, payload: e })
                    );
                  this.props.isVisible && Q(B.LOGIN_STEP_ENTER_LOGIN_PASS);
                })
                .catch((e) => {
                  this.props.isVisible && Q(B.LOGIN_STEP_ENTER_LOGIN_PASS),
                    this.Logger.zsymb(
                      21,
                      11655,
                      30003,
                      "getLoginCaptcha error {}",
                      (e && (e.error_code || e.code)) || e
                    );
                }));
          };
          t(e);
        }
        _toggleClass(e, t) {
          e &&
            (e.className.indexOf(t) >= 0
              ? (e.className = e.className.replace(t, ""))
              : (e.className += " " + t));
        }
        _handlePhoneNumberChange(e) {
          this.setState({
            countryCode: e.countryCode,
            countryIsoCode: e.countryIsoCode,
            phoneNumber: e.phoneNumber,
            enableRequestLogin: e.phoneNumber.length >= 6,
            showRequestLoginTooltip:
              e.phoneNumber.length >= 6 &&
              (!this._password || this._password.value.length < 6),
            enablePasswordLogin:
              e.phoneNumber.length >= 6 &&
              this._password &&
              this._password.value.length >= 3 &&
              this._captcha &&
              this._captcha.value.length >= 1,
            enableRetry:
              e.phoneNumber.length >= 6 &&
              this._captcha &&
              this._captcha.value.length >= 1,
          }),
            this._showErrorMessage(null);
        }
        _handlePasswordChange(e) {
          const t = {
            showRequestLoginTooltip:
              this.state.phoneNumber.length >= 6 && e.target.value.length < 6,
            enablePasswordLogin:
              this.state.phoneNumber.length >= 6 && e.target.value.length >= 3,
          };
          this.state.avatar ||
            ((t.enablePasswordLogin =
              t.enablePasswordLogin &&
              this._captcha &&
              this._captcha.value.length >= 1),
            (t.showCaptcha = e.target.value.length > 0)),
            this.setState(t),
            this._showErrorMessage(null);
        }
        _handleCaptchaChange(e) {
          this.setState({
            enablePasswordLogin:
              this.state.phoneNumber.length >= 6 &&
              this._password &&
              this._password.value.length >= 3 &&
              e.target.value.length >= 1,
            enableRetry: e.target.value.length >= 1,
          }),
            this._showErrorMessage(null);
        }
        _onTypeCaptcha(e) {
          13 == e.which &&
            (this.state.enablePasswordLogin && this._signIn(),
            e.preventDefault());
        }
        _handleBackButtonClick() {
          this._showErrorMessage(null),
            this.setState({
              showCaptcha: !1,
              enableRequestLogin: this.state.phoneNumber.length >= 6,
            }),
            this.confirmTimer &&
              (clearInterval(this.confirmTimer), (this.confirmTimer = null)),
            this.timer && (clearTimeout(this.timer), (this.timer = null));
        }
        runConfirmTimer() {
          this.confirmTimer = setInterval(() => {
            let e = this.state.confirmTimeout - 1;
            e <= 0
              ? (this.confirmTimer &&
                  (clearInterval(this.confirmTimer),
                  (this.confirmTimer = null)),
                this._getLoginCaptcha(!0),
                (this.toFocus = "captcha"))
              : this.setState({ confirmTimeout: e });
          }, 1e3);
        }
        _isRecycleSimOrChangedPhone(e) {
          let t = !1;
          return (
            e &&
              e.error_code &&
              ([18041, 18042, 18043].includes(e.error_code)
                ? ((t = !0),
                  this._showErrorMessage(
                    e.error_message_localize
                      ? e.error_message_localize
                      : ae.default.str("STR_SIGNIN_ERROR_RECYCLE_SIM")
                  ))
                : 18044 == e.error_code &&
                  ((t = !0),
                  this._showErrorMessage(
                    e.error_message_localize
                      ? e.error_message_localize
                      : ae.default.str("STR_SIGNIN_ERROR_CHANGED_NUMPHONE")
                  ),
                  this.props.signInAnother && this.props.signInAnother(!1))),
            t
          );
        }
        _renderCaptchaSection() {
          let e = null,
            t = null;
          return (
            (t = i.a.createElement(
              "div",
              { className: "z-input flx-1" },
              i.a.createElement(se.a, {
                id: "captcha-txt",
                required: !0,
                textKey: "STR_INPUT_CAPTCHA",
                className: "login-pass__group__captcha",
                onKeyPress: this._onTypeCaptcha,
                onChange: this._handleCaptchaChange,
                type: "text",
                onFocus: () => (this.toFocus = "captcha"),
                inputRef: (e) => {
                  (this._captcha = e),
                    e && "captcha" === this.toFocus && e.focus();
                },
                maxLength: "100",
                title: "",
              })
            )),
            (e = i.a.createElement(
              "div",
              {
                id: "captcha",
                className: "login-pass__captcha flx flx-center flx-al-c",
              },
              i.a.createElement("img", {
                src: this.props.state.captchaImg,
                alt: "captcha",
              }),
              i.a.createElement(ne.a, {
                icon: "outline-reload",
                onClick: this._getLoginCaptcha.bind(this, !0),
                type: "tertiary-neutral",
                size: "large",
              })
            )),
            i.a.createElement(
              "div",
              { className: "login-pass__group flx captcha-section" },
              t,
              e
            )
          );
        }
        _onClosePopupLogin() {
          $e.ModalManagerV2.closeModal(at);
        }
        _checkRemember() {
          this.props.checkRemember &&
            this.props.checkRemember(!this.state.isRemember),
            this.setState({ isRemember: !this.state.isRemember });
        }
        onSignUp() {
          this.props.onSignUp && this.props.onSignUp();
        }
        onShowOtherOptions() {
          this.otherOptionsMenuRef &&
            this.otherOptionsMenuRef.show(null, this.otherOptionsRef);
        }
        showMobileLoginChecking() {
          this.props.signInWithMobileRequest &&
            this.props.signInWithMobileRequest();
        }
        render() {
          let e,
            t,
            a,
            s = null,
            n = null,
            o = null,
            r = null,
            c = null;
          (s = i.a.createElement(ie.a, {
            id: "password-txt",
            title: "STR_INPUT_PASSWORD_REQUEST",
            textKey: "STR_PASSWORD",
            onFocus: (e) => (this.toFocus = "password"),
            inputRef: (e) => {
              (this._password = e),
                e &&
                  ("password" === this.toFocus ||
                    (this.state.avatar && this.props.isVisible)) &&
                  e.focus();
            },
            domRef: this._password,
            onKeyPress: this._onTypeCaptcha,
            onChange: this._handlePasswordChange,
            "data-id": "txt_Login_Psw",
          })),
            (o = i.a.createElement(d.a, {
              textKey: "STR_SIGNIN_FORGET",
              tagName: "div",
              onClick: () =>
                this.props.onForgotPasswordClick(
                  this.state.phoneNumber,
                  this.state.countryIsoCode,
                  this.state.countryCode
                ),
              className:
                "signin-forget-pw signin-mid-container " +
                (this.state.blocking ? " disabled" : ""),
            }));
          let l = [
            {
              textKey: "STR_SIGNIN_BY_MOBILE",
              onclick: this.showMobileLoginChecking.bind(this),
            },
          ];
          this.state.avatar &&
            l.push({
              textKey: "STR_SIGNIN_OTHER",
              onclick: () => this.props.signInAnother(!0),
            }),
            (r = l.length
              ? i.a.createElement(ne.a, {
                  size: "large",
                  textKey: l.length > 1 ? "STR_OPTHER_OPTIONS" : l[0].textKey,
                  ref: (e) => (this.otherOptionsRef = e),
                  onClick:
                    l.length > 1
                      ? this.onShowOtherOptions.bind(this)
                      : l[0].onclick,
                  className: "margin-auto",
                  type: "tertiary-neutral",
                  disabled: this.state.blocking,
                  isActive: this.state.menuShown,
                })
              : null),
            (c =
              l.length > 1
                ? i.a.createElement(Je.default, {
                    popoverProps: {
                      identity: {
                        windowId: tt.c,
                        name: S.PopoverIdentitiesDefine.LOGIN_PASSWORD,
                      },
                      anchorEl: this.otherOptionsRef,
                    },
                    ref: (e) => (this.otherOptionsMenuRef = e),
                    items: [
                      {
                        textKey: "STR_SIGNIN_BY_MOBILE",
                        onclick: this.showMobileLoginChecking.bind(this),
                      },
                      this.state.avatar
                        ? {
                            textKey: "STR_SIGNIN_OTHER",
                            onclick: () => this.props.signInAnother(!0),
                          }
                        : null,
                    ].filter((e) => !!e),
                    onShow: () => {
                      this.setState({ menuShown: !0 });
                    },
                    onClose: () => {
                      this.setState({ menuShown: !1 });
                    },
                  })
                : null),
            (a =
              1 == this.props.configOptionRemember
                ? i.a.createElement(
                    "p",
                    {
                      className: "login-page__main-bottom",
                      style: { paddingLeft: "14px", width: "170px" },
                      onClick: this._checkRemember.bind(this),
                    },
                    i.a.createElement("i", {
                      className:
                        "clickable" +
                        (this.state.isRemember
                          ? " fa fa-fill-checkbox-square"
                          : " fa fa-uncheckbox-square"),
                      style: {
                        color: "var(--text-information)",
                        fontSize: "var(--f14)",
                        cursor: "pointer",
                        position: "relative",
                        top: "2px",
                      },
                    }),
                    i.a.createElement(d.a, {
                      className: "clickable",
                      textKey: "STR_REMEMBER_SESSION",
                      style: { paddingLeft: "6px" },
                    })
                  )
                : null),
            (e = this.state.avatar
              ? i.a.createElement(
                  "div",
                  { className: "flx flx-col flx-al-c flx-1" },
                  i.a.createElement(_e.d, {
                    size: "xxl",
                    target: {
                      avatar: this.state.avatar,
                      displayName: this.state.displayName,
                    },
                  }),
                  i.a.createElement(
                    et.a,
                    { className: "login-pass__recent__name truncate" },
                    this.state.displayName
                  )
                )
              : i.a.createElement(f.a, {
                  idElementInputPhone: "usrID-txt",
                  idElementSelectCountry: "country-txt",
                  onKeyPress: this._onTypeCaptcha,
                  onFocus: () => {
                    this.toFocus = "phone";
                  },
                  inputRef: (e) => {
                    e &&
                      ("phone" === this.toFocus ||
                        (!this.toFocus && this.props.isVisible)) &&
                      e.focus();
                  },
                  value: this.state.phoneNumber,
                  countryCode: this.state.countryCode,
                  countryIsoCode: this.state.countryIsoCode,
                  onChange: this._handlePhoneNumberChange,
                  phoneNumber: this.state.phoneNumber,
                  borderBottomOnly: !0,
                  "data-id": "txt_Login_Phone",
                })),
            this.state.showCaptcha && (n = this._renderCaptchaSection());
          let h = i.a.createElement(ne.a, {
            textKey: "STR_SIGNIN",
            onClick: this._signIn,
            disabled: !this.state.enablePasswordLogin || this.state.blocking,
            className: "wi signin-btn",
            size: "large",
            loading: this.state.blocking,
            "data-id": "btn_Login_LoginwPsw",
          });
          return (
            this.state.showPopupLogin &&
              $e.ModalManagerV2.isVisible(at) &&
              (t = i.a.createElement(
                $e.default,
                {
                  visible: !0,
                  title: i.a.createElement(d.a, {
                    textKey: "STR_REQUEST_LOGIN",
                  }),
                  styleTitle: {
                    fontSize: "var(--f14)",
                    fontWeight: "var(--semibold)",
                  },
                  className: "no-padding",
                  border: "no-border",
                  showCloseButton: !0,
                  onCancel: this._onClosePopupLogin.bind(this),
                  width: "350px",
                  footer: {
                    confirm: {
                      textKey: "STR_SIGNIN_REQUEST_LOGIN_TOOLTIP",
                      click: () => {
                        this._onClosePopupLogin(),
                          this.showMobileLoginChecking();
                      },
                      disabled: !this.state.enableRequestLogin,
                    },
                    cancel: {
                      textKey: "STR_POPUP_SIGNIN_QR",
                      click: () => {
                        this._onClosePopupLogin(),
                          this.props.dispatch({ type: M });
                      },
                      disabled: !this.state.enablePasswordLogin,
                    },
                    direction: "col",
                  },
                },
                i.a.createElement(
                  "div",
                  { className: "flx" },
                  i.a.createElement(
                    "div",
                    {
                      className: "login-pass",
                      style: { width: "100%", padding: "16px" },
                    },
                    i.a.createElement(
                      "div",
                      { style: { marginBottom: "4px" } },
                      i.a.createElement(d.a, {
                        textKey: "STR_POPUP_LOGIN_WITHOUT_PW",
                      })
                    )
                  )
                )
              )),
            i.a.createElement(
              "div",
              {
                className:
                  "flx flx-col flx-1 h100 login-container-in-tabs " +
                  (this.state.avatar ? " comeback" : ""),
                style: this.props.innerState ? { padding: "0 16px" } : null,
              },
              i.a.createElement(
                "div",
                { className: "login-pass" },
                e,
                s,
                null,
                n,
                a,
                t,
                i.a.createElement(
                  "div",
                  {
                    className:
                      "error-message" +
                      (this.props.state.loginFail &&
                      this.props.state.errorMessage
                        ? " "
                        : " hidden"),
                    style: { marginBottom: "0" },
                  },
                  this.props.state.loginFail && this.props.state.errorMessage
                )
              ),
              i.a.createElement(
                "div",
                { className: "login-pass flx flx-col flx-1" },
                h,
                h && null,
                null,
                i.a.createElement(
                  "div",
                  { className: "flx flx-col flx-1" },
                  o,
                  i.a.createElement("div", { className: "flx-1" }),
                  r,
                  c
                ),
                null
              )
            )
          );
        }
      }
      var nt = st,
        it = a("97kL"),
        ot = (a("Enw1"), a("4prX")),
        rt = a("Iawr"),
        ct = a("wFQh"),
        lt = a("Yi2m"),
        ht = a("gwig"),
        dt = a("PoHQ"),
        ut = a("FInY"),
        _t = a("ZwwW"),
        pt = a("zRkS"),
        mt = a("Ff2n");
      const Et = ["tabOffset", "tabs", "onChange", "tabOnly"];
      function gt(e) {
        let {
          tabOffset: t = 0,
          tabs: a = [],
          onChange: s = null,
          tabOnly: n = null,
        } = e;
        Object(mt.a)(e, Et);
        const [o, r] = i.a.useState(t);
        i.a.useEffect(() => {
          r(t);
        }, [t]);
        let c = null,
          l = [];
        var h;
        a &&
          a.length > 0 &&
          (null != n
            ? (c =
                (null === (h = a[n]) || void 0 === h ? void 0 : h.domContent) ||
                null)
            : (l = a.map((e, t) => {
                if (!e) return null;
                let { domContent: a, textKey: n = "" } = e;
                return (
                  o === t && (c = a),
                  i.a.createElement(
                    "div",
                    {
                      className:
                        "tab-container " + (t === o ? "selected-tab" : ""),
                      key: "tab_" + t,
                      onClick: (e) =>
                        (function (e) {
                          r(e), s && s(e);
                        })(t),
                    },
                    i.a.createElement(d.a, { textKey: n, tagName: "div" })
                  )
                );
              })));
        return i.a.createElement(
          "div",
          { className: "tabs-container w100 h100 flx flx-col rel" },
          n
            ? null
            : i.a.createElement(
                "div",
                { className: "tabs-main flx flx-al-c" },
                l
              ),
          i.a.createElement("div", { className: "flx-1 flx" }, c)
        );
      }
      var Tt = function (e) {
        const t = Object(n.useRef)(null);
        return (
          Object(n.useEffect)(() => {
            t.current && t.current.focus();
          }, []),
          i.a.createElement(se.a, {
            required: !0,
            textKey: "STR_INPUT_OTP_PLACEHOLDER",
            className: "otp-input",
            name: "captcha",
            maxLength: "6",
            inputRef: t,
            disabled: !!e.disabled,
            onChange: () => {
              let a = t.current.value;
              e.onInputOTP && e.onInputOTP(a);
            },
            onKeyPress: (a) => {
              if ("Enter" === a.key) {
                let s = t.current && t.current.value;
                return (
                  e.callSubmit(s), a.preventDefault(), void a.stopPropagation()
                );
              }
            },
          })
        );
      };
      var Nt = function (e) {
        const [t, a] = Object(n.useState)(0),
          s = Object(n.useRef)(null);
        return (
          Object(n.useEffect)(() => {
            if (t)
              return (
                (s.current = setTimeout(() => {
                  a(t - 1);
                }, 1e3)),
                () => clearTimeout(s.current)
              );
          }, [t]),
          Object(n.useEffect)(() => {
            a(e.timeout);
          }, [e.timeout, e.startCountdown]),
          i.a.createElement(
            "div",
            {
              onClick: e.onClick,
              className:
                "resend-otp flx flx-center " +
                (t || !e.enable ? "disable" : ""),
            },
            i.a.createElement(d.a, {
              textKey: "STR_RESEND",
              className: "btn-link",
            }),
            t
              ? i.a.createElement(
                  "span",
                  { className: "btn-link" },
                  " (",
                  t,
                  "s)"
                )
              : i.a.createElement(
                  "div",
                  { className: "btn-link flx flx-al-c" },
                  " ",
                  i.a.createElement(pt.a, {
                    className: "icon-outline-reload btn-link",
                  })
                )
          )
        );
      };
      var Rt = function (e) {
        const { error: t } = e,
          a = Object(n.useRef)(null),
          [s, o] = Object(n.useState)(0);
        if (
          (Object(n.useEffect)(() => {
            if (e.error && e.error.timeout) {
              let s = e.error.timeout;
              (t = s),
                clearInterval(a.current),
                (a.current = null),
                o(t),
                (a.current = setInterval(() => {
                  o(t--),
                    0 === t && (clearInterval(a.current), (a.current = null));
                }, 1e3));
            }
            var t;
          }, [e.error]),
          !t)
        )
          return i.a.createElement("div", null);
        switch (t.eCode) {
          case H:
            return i.a.createElement(
              "div",
              { className: "text-center request-login-info error" },
              i.a.createElement(d.a, {
                tagName: "div",
                textKey: "STR_REMEMBER_LOGIN_REJECTED",
              }),
              i.a.createElement(d.a, {
                tagName: "div",
                textKey: "STR_PLEASE_RETRY",
              })
            );
          case z:
            return i.a.createElement(
              "div",
              { className: "text-center request-login-info error" },
              i.a.createElement(d.a, {
                tagName: "div",
                textKey: "STR_REMEMBER_LOGIN_TIMEOUT",
              })
            );
          case Y:
            return i.a.createElement(
              "div",
              { className: "error-message" },
              i.a.createElement(d.a, { textKey: "STR_SIGNIN_ERROR_NO_NETWORK" })
            );
          case Z:
            return i.a.createElement(
              "div",
              { className: "text-center request-login-info error" },
              i.a.createElement(d.a, {
                textKey: "STR_REQUEST_TIMES_LIMIT",
                textArguments: [Math.floor(s / 60), Math.round(s % 60)],
              })
            );
          case J:
          case ee:
            return i.a.createElement(
              "div",
              { className: "text-center request-login-info error" },
              i.a.createElement("span", null, t.eMessage)
            );
          case te:
            return i.a.createElement(
              "div",
              { className: "text-center request-login-info error" },
              i.a.createElement(d.a, { textKey: "STR_OTP_REQUEST_LIMIT" })
            );
          default:
            return i.a.createElement(
              "div",
              { className: "text-center request-login-info error" },
              t.eMessage
                ? i.a.createElement("span", null, t.eMessage)
                : i.a.createElement(d.a, { textKey: "STR_ERROR_OCCURED" })
            );
        }
      };
      var ft = function (e) {
        return i.a.createElement(ne.a, {
          textKey: "STR_VERIFY",
          className: "wi signin-btn",
          size: "large",
          onClick: () => {
            e.disable || (e.onClick && e.onClick());
          },
          disabled: e.disable,
          loading: e.blocking,
        });
      };
      function St(e) {
        const t = Object(n.useRef)(null);
        Object(n.useEffect)(() => {
          t.current && t.current.focus();
        }, []);
        return i.a.createElement(
          "div",
          { className: "z-input", style: { flex: "1" } },
          i.a.createElement(se.a, {
            id: "captcha-txt",
            required: !0,
            textKey: "STR_INPUT_CAPTCHA",
            className: "login-pass__group__captcha",
            onKeyPress: (a) => {
              if (13 == a.which) {
                let a = t.current.value;
                e.onSubmit && e.onSubmit(a);
              }
            },
            onChange: () => {
              let a = t.current.value;
              e.onInputCaptcha && e.onInputCaptcha(a);
            },
            type: "text",
            inputRef: t,
            maxLength: "100",
          })
        );
      }
      var Ct = function (e) {
        const { className: t } = e;
        let a = null,
          s = null;
        s = i.a.createElement(St, e);
        const n = "data:image/png;base64," + e.captcha.captcha_img;
        a = i.a.createElement(
          "div",
          { id: "captcha", className: "login-pass__captcha" },
          i.a.createElement("img", { src: n, alt: "captcha" }),
          i.a.createElement(
            "div",
            {
              className: "dib login-pass__captcha__refresh",
              style: { marginRight: "0" },
            },
            i.a.createElement("i", {
              className: "fa fa-reload btn",
              onClick: e.getLoginCaptcha,
            })
          )
        );
        const o = R()("login-pass__group flx captcha-section", t);
        return i.a.createElement("div", { className: o }, s, a);
      };
      const It = fe.ModuleContainer.resolve(Re.ZLoggerFactory).createZLogger(
          "login",
          ["sensitive-login", "opt-confirm"]
        ),
        Ot = new s.LocalId(),
        yt = 0,
        bt = 1,
        vt = 2;
      function Pt(e) {
        const { instructionText: t, lastData: a, screen: s } = e;
        let n;
        return (
          (n =
            s === vt
              ? i.a.createElement(d.a, { textKey: t })
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(d.a, {
                    textKey: "STR_VERIFY_ACCOUNT_DESC",
                  }),
                  i.a.createElement(
                    "span",
                    { className: "act-phone-num" },
                    " (+",
                    a.countryCode,
                    ")",
                    a.phone && a.phone.slice(1)
                  )
                )),
          n
        );
      }
      function At(e) {
        const {
          enableRetryOTP: t,
          otpCountdown: a,
          screen: s,
          startCountdown: n,
          resendOTP: o,
        } = e;
        let r = null;
        return (
          s === bt &&
            (r = i.a.createElement(
              "div",
              { className: "flx resend-otp-container" },
              i.a.createElement(d.a, {
                textKey: "STR_DONT_RECEIVE_OTP",
                tagName: "div",
              }),
              i.a.createElement(Nt, {
                onClick: o,
                timeout: a,
                startCountdown: n,
                enable: t,
              })
            )),
          r
        );
      }
      var Lt = function (e) {
        const t = Object(n.useRef)(null),
          [a, s] = (Object(n.useRef)(null), Object(n.useState)(!1)),
          [o, r] = Object(n.useState)(null),
          [c, l] = Object(n.useState)(null),
          [h, u] = Object(n.useState)(!1),
          [_, p] = Object(n.useState)(!1),
          [E, g] = Object(n.useState)(!0),
          [T, N] = Object(n.useState)(15),
          [R, f] = Object(n.useState)(!1),
          [S, C] = Object(n.useState)(""),
          [I, O] = Object(n.useState)({ prev: -1, current: yt }),
          y = Object(n.useRef)(null),
          b = e.state && e.state.pass,
          v = b && b.lastData,
          [P, A] = Object(n.useState)(),
          L = Object(n.useRef)(),
          w = Object(n.useRef)(),
          M = i.a.useRef();
        Object(n.useEffect)(() => {
          (L.current = v.captchaToken ? v.captchaToken : ""),
            (w.current = v.captchaAnswer ? v.captchaAnswer : ""),
            x();
          const e = () => {
            r(null);
          };
          return (
            ae.default.callUpdate(e),
            () => {
              ae.default.removeUpdate(e);
            }
          );
        }, []);
        const k = (e, a) => {
            const s = Object(ce.a)(e);
            let n = s.errorCode || X,
              i = 0;
            s.data && s.data.time_left && (i = s.data.time_left);
            let o = "";
            switch (n) {
              case $:
              case Z:
                (i = i || 900),
                  p(!0),
                  (t.current = setTimeout(() => {
                    p(!1), r(null);
                  }, 1e3 * i));
                break;
              case te:
                g(!1), N(0);
                break;
              case le.a.REJECTED_OTP:
                if (I.current === bt) {
                  var c;
                  if (
                    (r(null),
                    null !== (c = s.data) && void 0 !== c && c.manual_sms)
                  ) {
                    var h;
                    const e =
                        null === (h = s.data) || void 0 === h
                          ? void 0
                          : h.manual_sms,
                      t =
                        e.error &&
                        e.instruction &&
                        `${e.error} ${e.instruction}`;
                    t && C(t);
                  }
                } else {
                  var d;
                  if (null !== (d = s.data) && void 0 !== d && d.manual_sms) {
                    var u;
                    const e =
                        null === (u = s.data) || void 0 === u
                          ? void 0
                          : u.manual_sms,
                      t =
                        e.hint && e.instruction && `${e.hint} ${e.instruction}`;
                    t && C(t);
                  }
                  I.current === vt &&
                    r({ eCode: n, eMessage: s.errorMessageLocalize || "" });
                }
                return void D(vt);
              case le.a.CAPTCHA_REQUIRED: {
                const e = s.data;
                e && e.captcha && q(e.captcha),
                  (o = s.errorMessageLocalize || "");
                break;
              }
              case le.a.INVALID_CAPTCHA:
              case le.a.CAPTCHA_EXPIRED:
              case le.a.CAPTCHA_RETRY_RATE_LIMIT_EXCEEDED:
                o = s.errorMessageLocalize || "";
            }
            o
              ? (l(o), r(null))
              : (l(null),
                r({
                  eCode: n,
                  timeout: i,
                  eMessage: s.errorMessageLocalize || "",
                }));
          },
          x = () => {
            if (!E) return;
            s(!a);
            let e = m.default.getZaloClientID(),
              t = v.countryIsoCode ? v.countryIsoCode : "VN",
              n = v.phone;
            const i = Ot.next();
            N(15),
              m.default
                .sendLoginOTP(e, n, t, L.current, w.current)
                .then(() => {
                  D(bt), Ot.valid(i);
                })
                .catch((e) => {
                  It.zsymb(
                    21,
                    9866,
                    3e4,
                    "get OTP error {}",
                    (e && (e.error_code || e.code)) || e
                  ),
                    k(e);
                });
          },
          D = (e) => {
            O({ prev: I.current, current: e });
          },
          U = () => {
            if (!h) return;
            r(null), f(!0);
            let t = {
              question_type: "otp",
              answer_type: "otp",
              answers: y.current || "",
            };
            m.default
              .loginWithPassword(
                v.phone,
                v.password,
                w.current,
                L.current,
                m.default.getZaloClientID(),
                1,
                t,
                { code: v.countryCode, iso: v.countryIsoCode }
              )
              .then(() => {
                e.successLogin();
              })
              .catch((e) => {
                f(!1), k(e);
              });
          },
          G = () => {
            M.current && (clearTimeout(M.current), (M.current = null));
          },
          q = (e, t = !0) => {
            G(),
              A(e.captcha_img),
              (L.current = e.token),
              t &&
                (M.current = setTimeout(() => {
                  F();
                }, 1e3 * e.expiration_time));
          },
          F = () => {
            G(),
              m.default
                .getCaptcha()
                .then((e) => {
                  const { data: t } = e;
                  t && q(t);
                })
                .catch((e) => {
                  It.zsymb(
                    21,
                    9866,
                    30001,
                    "callGetCaptcha {}",
                    (e && (e.error_code || e.code)) || e
                  );
                });
          };
        return i.a.createElement(
          "div",
          { className: "sensitive-login-container" },
          i.a.createElement(
            "div",
            { className: "sensitive-login" },
            i.a.createElement(
              "div",
              { className: "sensitive-login-title" },
              i.a.createElement(d.a, { textKey: "STR_VERIFY_ACCOUNT" })
            ),
            i.a.createElement(
              "div",
              { className: "sensitive-login-desc" },
              i.a.createElement(Pt, {
                instructionText: S,
                screen: I.current,
                lastData: v,
              })
            ),
            i.a.createElement(Rt, { error: o }),
            i.a.createElement(Tt, {
              callSubmit: U,
              onInputOTP: (e) => {
                (y.current = e), u(!!y.current);
              },
              disabled: _,
            }),
            i.a.createElement("div", { className: "otp-separater" }),
            P
              ? i.a.createElement(Ct, {
                  className: "mt-16",
                  captcha: { captcha_img: P },
                  onInputCaptcha: (e) => {
                    w.current = e;
                  },
                  getLoginCaptcha: () => {
                    F();
                  },
                })
              : null,
            c
              ? i.a.createElement(
                  "div",
                  { className: "mt-8" },
                  i.a.createElement(d.a, { className: "f12 error", textKey: c })
                )
              : null,
            i.a.createElement(ft, {
              onClick: U,
              disable: !h || R || _,
              blocking: R,
            }),
            i.a.createElement(At, {
              enableRetryOTP: E,
              otpCountdown: T,
              screen: I.current,
              startCountdown: a,
              resendOTP: x,
            })
          )
        );
      };
      var wt = function (e) {
        const [t, a] = Object(n.useState)(e.timeout),
          s = Object(n.useRef)(null);
        return (
          Object(n.useEffect)(() => {
            if (t)
              return (
                (s.current = setTimeout(() => {
                  a(t - 1);
                }, 1e3)),
                () => clearTimeout(s.current)
              );
          }, [t]),
          Object(n.useEffect)(() => {
            a(e.timeout);
          }, [e.timeout]),
          i.a.createElement(
            "div",
            null,
            t
              ? i.a.createElement(d.a, {
                  className: "mobile-confirm-countdown",
                  textKey: "STR_REQUEST_LOGIN_PENDING",
                  textArguments: [t, t > 1 ? "s" : ""],
                })
              : i.a.createElement(ne.a, {
                  textKey: e.textKey || "STR_RETRY",
                  onClick: () => {
                    t || e.disable || (e.onClick && e.onClick());
                  },
                  className: "wi signin-btn",
                  size: "large",
                  disabled: e.disable || e.blocking,
                  loading: e.blocking,
                })
          )
        );
      };
      const Mt = new s.LocalId();
      var kt = function (e) {
        const t = i.a.useRef(null),
          a = i.a.useRef(null),
          o = i.a.useRef(null),
          [r, c] = Object(n.useState)(30),
          [l, h] = Object(n.useState)(null),
          [u, _] = Object(n.useState)(null),
          [E, g] = Object(n.useState)(!1),
          [T, N] = Object(n.useState)(!1),
          R = (e.state.pass && e.state.pass.lastData) || {};
        Object(n.useEffect)(() => {
          S();
          const e = () => {
            _(null);
          };
          return (
            ae.default.callUpdate(e),
            () => {
              clearTimeout(a.current),
                clearTimeout(o.current),
                ae.default.removeUpdate(e);
            }
          );
        }, []);
        const f = () => {
            a.current && (clearTimeout(a.current), c(0), (a.current = null)),
              h({});
            const e = () => {
              p.default
                .getLoginCaptcha(m.default.getZaloClientID())
                .then((t) => {
                  t.data && 0 == t.data.error_code && t.data.data
                    ? (h(t.data.data),
                      (a.current = setTimeout(() => {
                        (a.current = null), c(0), e();
                      }, 1e3 * t.data.data.expiration_time)))
                    : h({});
                })
                .catch((e) => {
                  s.default.error(
                    "_getLoginCaptcha error ",
                    (e && (e.error_code || e.code)) || e
                  );
                });
            };
            e();
          },
          S = () => {
            const a = Date.now();
            (t.current && a - t.current < 700) ||
              (N(!0),
              (t.current = a),
              m.default
                .loginWithPopup(
                  R.phone,
                  R.countryIsoCode,
                  l ? l.token : null,
                  E || null
                )
                .then((t) => {
                  h(null), g(null), _(null), c(30);
                  const a = Mt.next();
                  m.default
                    .awaitQRConfirm(t.url, t.timeout)
                    .then(() => {
                      Mt.valid(a)
                        ? e.successLogin()
                        : s.default.error("request-login: invalid request id");
                    })
                    .catch((e) => {
                      N(!1),
                        c(0),
                        Mt.valid(a)
                          ? (18010 == e
                              ? _({ eCode: H })
                              : -10 == e
                              ? _({ eCode: z })
                              : e &&
                                e.code &&
                                ("ERR_NO_NETWORK" === e.code ||
                                  "ERR_CONNECTION_TIMED_OUT" === e.code)
                              ? _({ eCode: Y })
                              : _({ eCode: X }),
                            f())
                          : s.default.error(
                              "request-login: invalid request id"
                            );
                    });
                })
                .catch((e) => {
                  if (
                    (N(!1),
                    s.default.error(
                      "request login popup error",
                      (e && (e.error_code || e.code)) || e
                    ),
                    e)
                  )
                    if (e.error_code === Z) {
                      let t = 900;
                      e.data && e.data.time_left && (t = e.data.time_left),
                        _({ eCode: Z, timeout: t, eMessage: "" }),
                        (o.current = setTimeout(() => {
                          _(null), c(0);
                        }, 1e3 * t));
                    } else
                      e.error_code === J
                        ? (_({
                            eCode: e.error_code,
                            timeout: 0,
                            eMessage: e.error_message_localize || "",
                          }),
                          h(e.data),
                          c(0))
                        : (_({
                            eCode: e.error_code,
                            timeout: 0,
                            eMessage: e.error_message_localize || "",
                          }),
                          f(),
                          c(0));
                  else _({ eCode: X, timeout: 0, eMessage: "" }), f();
                }));
          };
        return i.a.createElement(
          "div",
          { className: "sensitive-login-container" },
          i.a.createElement(
            "div",
            { className: "sensitive-login" },
            i.a.createElement(
              "div",
              { className: "sensitive-login-title" },
              i.a.createElement(d.a, { textKey: "STR_VERIFY_ACCOUNT" })
            ),
            i.a.createElement(
              "div",
              { className: "sensitive-login-desc" },
              i.a.createElement(d.a, {
                textKey:
                  u && u.eCode === J
                    ? "STR_LOGIN_WAITING_REQ_CAPT"
                    : "STR_REMEMBER_LOGIN_WAITING",
              })
            ),
            i.a.createElement(Rt, { error: u }),
            l
              ? i.a.createElement(Ct, {
                  getLoginCaptcha: f,
                  captcha: l,
                  onInputCaptcha: (e) => {
                    g(e);
                  },
                  onSubmit: S,
                })
              : null,
            i.a.createElement(wt, {
              onClick: S,
              timeout: r,
              disable: !E || !l || !l.captcha_img,
              blocking: T,
              textKey: u && u.eCode === J ? "STR_CONFIRM" : "",
            })
          )
        );
      };
      const xt = !1;
      class Dt extends i.a.Component {
        constructor(e) {
          super(e),
            Object(T.a)(this, "_successLogin", () => {
              O();
            }),
            Object(T.a)(this, "_useOTP", () => {
              this.setState({ method: 2 });
            }),
            Object(T.a)(this, "_useAnotherWay", () => {
              let e = 2;
              2 === this.state.method && (e = 1), this.setState({ method: e });
            }),
            Object(T.a)(this, "_back", () => {
              this.props.dispatch({ type: W });
            }),
            (this.state = { method: "otp" === e.defaultOption ? 2 : 1 }),
            (this.lastSignIn = null);
        }
        render() {
          let e = null,
            t = this.state.method;
          return (
            1 === t
              ? (e = i.a.createElement(kt, {
                  state: this.props.state,
                  successLogin: this._successLogin,
                }))
              : 2 === t &&
                (e = i.a.createElement(Lt, {
                  state: this.props.state,
                  successLogin: this._successLogin,
                })),
            i.a.createElement(
              "div",
              { style: { height: "100%", position: "relative" } },
              e,
              i.a.createElement(
                "div",
                { className: "sensitive-login-footer" },
                i.a.createElement(
                  "div",
                  { className: "try-another-way" },
                  i.a.createElement(d.a, { textKey: "STR_TRY_ANOTHER_WAY" }),
                  i.a.createElement(d.a, {
                    textKey:
                      1 === t ? "STR_SEND_OTP" : "STR_SEND_MOBILE_CONFIRM",
                    tagName: "a",
                    onClick: this._useAnotherWay,
                    className: "btn-link try-another-btn",
                  })
                ),
                i.a.createElement(
                  "div",
                  { className: "back-btn" },
                  i.a.createElement(d.a, {
                    textKey: "STR_BACK",
                    onClick: this._back,
                  })
                )
              )
            )
          );
        }
      }
      var Ut = Dt;
      const Gt = ["onBack", "data", "error", "state", "onSuccess", "onError"],
        qt = new s.LocalId();
      function Ft(e) {
        let {
            onBack: t,
            data: a = null,
            error: s = null,
            state: n = null,
            onSuccess: o = null,
            onError: r = null,
          } = e,
          c = Object(mt.a)(e, Gt);
        const [l, h] = i.a.useState((null == a ? void 0 : a.phone) || ""),
          [_, E] = i.a.useState((null == a ? void 0 : a.code) || 84),
          [T, N] = i.a.useState((null == a ? void 0 : a.iso) || "VN"),
          [R, S] = i.a.useState(null),
          [C, I] = i.a.useState(null),
          [y, b] = i.a.useState(!1),
          [v, P] = i.a.useState(-1),
          [L, w] = i.a.useState(!1),
          [k, x] = i.a.useState(!1),
          D = i.a.useRef(null),
          U = i.a.useRef(null),
          G = i.a.useRef(null);
        function q() {
          l && (K(), j());
        }
        function F(e) {
          G.current && (clearTimeout(G.current), (G.current = null)),
            (G.current = setTimeout(() => {
              let t = e - 1;
              t < 0 ? P(-1) : F(t);
            }, 1e3)),
            P(e);
        }
        function K() {
          G.current && (clearTimeout(G.current), (G.current = null)),
            P(-1),
            I(null),
            w(!1);
        }
        function W(e, t) {
          const a = Object(ce.a)(e);
          if (0 === a.errorCode) return;
          const s = (function (e) {
            if (e.errorCode === le.a.REQUIRE_LOGIN_QR) {
              const t = {};
              if (
                (e.data && (t.data = e.data),
                e.errorMessageLocalize &&
                  (t.errorMessage = e.errorMessageLocalize),
                "function" == typeof c.dispatch)
              )
                return c.dispatch({ type: M, payload: t }), !0;
            }
            return !1;
          })(a);
          var n;
          s ||
            (I(e),
            a
              ? (function (e) {
                  let t = !1;
                  return (
                    e &&
                      e.error_code &&
                      ([18041, 18042, 18043].includes(e.error_code)
                        ? ((t = !0),
                          I(
                            e.error_message_localize
                              ? e.error_message_localize
                              : ae.default.str("STR_SIGNIN_ERROR_RECYCLE_SIM")
                          ))
                        : 18044 == e.error_code &&
                          ((t = !0),
                          I(
                            e.error_message_localize
                              ? e.error_message_localize
                              : ae.default.str(
                                  "STR_SIGNIN_ERROR_CHANGED_NUMPHONE"
                                )
                          ))),
                    t
                  );
                })(e) ||
                (a.errorCode === le.a.CAPTCHA_REQUIRED
                  ? a.data.captcha_img &&
                    S({
                      captcha_img:
                        "data:image/png;base64," + a.data.captcha_img,
                      token:
                        null === (n = a.data) || void 0 === n
                          ? void 0
                          : n.token,
                    })
                  : ("ERR_NO_NETWORK" !== a.code &&
                      "ERR_CONNECTION_TIMED_OUT" !== a.code) ||
                    (setTimeout(() => {
                      const { originUrl: e } = t || {};
                      Ze.a.onError(a.code, e);
                    }, 0),
                    I(ae.default.str("STR_SIGNIN_ERROR_NO_NETWORK"))))
              : I(ae.default.str("STR_ERROR_OCCURED")));
        }
        function j() {
          if (!y)
            return (
              b(!0),
              new Promise((e, t) => {
                var a;
                if (y) return t("blocking_state");
                const s = u.default.authDomain;
                m.default
                  .loginWithPopup(
                    l,
                    T,
                    null != R && R.token ? R.token : null,
                    null != R && R.token
                      ? null == D || null === (a = D.current) || void 0 === a
                        ? void 0
                        : a.value
                      : null
                  )
                  .then((a) => {
                    b(!1);
                    let { url: n, timeout: i } = a;
                    F(i);
                    const o = qt.next();
                    m.default
                      .awaitQRConfirm(n, i)
                      .then((s) => {
                        if (!qt.valid(o)) return t();
                        K(), O(), e(a);
                      })
                      .catch((e) => {
                        if (!qt.valid(o)) return t(e);
                        if ((K(), 18010 === e))
                          I(ae.default.str("STR_REMEMBER_LOGIN_REJECTED"));
                        else if (-10 === e) w(!0), R && B();
                        else {
                          let t = ae.default.str("STR_ERROR_OCCURED");
                          e &&
                            e.code &&
                            ("ERR_NO_NETWORK" === e.code ||
                              "ERR_CONNECTION_TIMED_OUT" === e.code) &&
                            ((t = ae.default.str(
                              "STR_SIGNIN_ERROR_NO_NETWORK"
                            )),
                            c.dispatch({ type: A, payload: { data: e } }),
                            setTimeout(() => {
                              Ze.a.onError(e.code, s);
                            }, 0),
                            I(t));
                        }
                        t(e);
                      });
                  })
                  .catch((e) => {
                    K(), b(!1);
                    W(e, { originUrl: s }), t(e);
                  });
              })
            );
        }
        function V(e) {
          13 == e.which && (j(), e.preventDefault());
        }
        function Q() {
          I(null), w(!1), H();
        }
        function B() {
          const e = () => {
            U.current && (clearTimeout(U.current), (U.current = null)),
              p.default
                .getLoginCaptcha(m.default.getZaloClientID())
                .then((t) => {
                  0 == t.data.error_code &&
                    ((U.current = setTimeout(() => {
                      (U.current = null), e();
                    }, 1e3 * t.data.data.expiration_time)),
                    c.dispatch({ type: A, payload: t }));
                })
                .catch((e) => {});
          };
          e();
        }
        function H(e) {
          var t;
          (e || (e = { phoneNum: l }), null != R && R.token) &&
            (e = Object(g.a)(
              Object(g.a)({}, e),
              {},
              {
                captcha:
                  (null == D || null === (t = D.current) || void 0 === t
                    ? void 0
                    : t.value) || "",
              }
            ));
          let { phoneNum: a, captcha: s } = e;
          x(!(!a || y || (!s && void 0 !== s)));
        }
        return (
          i.a.useEffect(() => {
            H();
          }, []),
          i.a.useEffect(() => {
            n.captchaToken
              ? null != R &&
                R.token &&
                n.captchaToken !== (null == R ? void 0 : R.token) &&
                S({ token: n.captchaToken, captcha_img: n.captchaImg })
              : B();
          }, [n]),
          i.a.useEffect(() => {
            C && B();
          }, [C]),
          i.a.createElement(
            "div",
            {
              className:
                "flx flx-col flx-1 login-padding mobile-login-page win",
            },
            c.noNetworkUI || null,
            i.a.createElement("img", { src: re, className: "sign-in-logo" }),
            i.a.createElement(d.a, {
              textKey: "STR_MOBILE_LOGIN",
              className: "sigin-title",
            }),
            i.a.createElement(d.a, {
              textKey: "STR_MOBILE_GUIDE",
              className: "register-desc",
            }),
            i.a.createElement(f.a, {
              onChange: function (e) {
                let t = e.phoneNumber;
                h(t),
                  E(e.countryCode),
                  N(e.countryIsoCode),
                  I(null),
                  H({ phoneNum: t });
              },
              value: l,
              countryCode: _,
              countryIsoCode: T,
              phoneNumber: l,
              onKeyPress: (e) => {
                13 === (null == e ? void 0 : e.which) && q();
              },
            }),
            (function () {
              if (v >= 0)
                return v <= 0
                  ? null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(d.a, {
                        textKey: "STR_REMEMBER_LOGIN_WAITING",
                        tagName: "div",
                        className: "mobile-login-subdesc",
                      }),
                      i.a.createElement(d.a, {
                        textKey: "STR_REQUEST_LOGIN_PENDING",
                        tagName: "div",
                        className: "mobile-login-countdown",
                        textArguments: [v, v > 1 ? "s" : ""],
                      })
                    );
              if (null == R || !R.token) return null;
              let e = null,
                t = null;
              t = i.a.createElement(
                "div",
                { className: "z-input flx-1" },
                i.a.createElement(se.a, {
                  id: "captcha-txt",
                  required: !0,
                  textKey: "STR_INPUT_CAPTCHA",
                  className: "login-pass__group__captcha",
                  onKeyPress: V,
                  onChange: Q,
                  type: "text",
                  inputRef: D,
                  maxLength: "100",
                  title: "",
                })
              );
              let { captcha_img: a } = R;
              return (
                (e = i.a.createElement(
                  "div",
                  {
                    id: "captcha",
                    className: "login-pass__captcha flx flx-center flx-al-c",
                  },
                  i.a.createElement("img", { src: a, alt: "captcha" }),
                  i.a.createElement(ne.a, {
                    icon: "outline-reload",
                    onClick: B,
                    type: "tertiary-neutral",
                    size: "large",
                  })
                )),
                i.a.createElement(
                  "div",
                  { className: "login-pass__group flx captcha-section" },
                  t,
                  e
                )
              );
            })(),
            (function () {
              let e = null;
              return (
                L
                  ? (e = i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(d.a, {
                        textKey: "STR_REMEMBER_LOGIN_TIMEOUT",
                        tagName: "div",
                      })
                    ))
                  : C &&
                    (C.constructor === Object
                      ? (e = he(C))
                      : C.constructor === String && (e = C)),
                e
                  ? i.a.createElement(
                      "div",
                      {
                        className: "error-message",
                        style: { marginBottom: 0 },
                      },
                      e
                    )
                  : null
              );
            })(),
            v > -1
              ? null
              : i.a.createElement(ne.a, {
                  textKey: C ? "STR_RETRY" : "STR_CONTINUE",
                  onClick: q,
                  className: "wi sign-in-waiting-retry-btn",
                  size: "large",
                  disabled: !k || y,
                  loading: y,
                }),
            i.a.createElement("div", { className: "flx-1" }),
            i.a.createElement(ne.a, {
              type: "tertiary-neutral",
              size: "large",
              textKey: "STR_BACK",
              onClick: t,
              className: "margin-auto",
              disabled: y,
            })
          )
        );
      }
      const Kt = 0,
        Wt = 1;
      function jt() {
        const [e, t] = i.a.useState(Kt);
        function a() {
          setTimeout(() => {
            t(Wt);
          }, 12e4);
        }
        return (
          i.a.useEffect(() => {
            a();
          }, []),
          e === Kt
            ? i.a.createElement(
                "div",
                { className: "flx flx-al-c flx-center no-network-banner" },
                i.a.createElement(pt.a, { className: "outline-disconnect" }),
                i.a.createElement(d.a, {
                  tagName: "div",
                  textKey: "STR_INFO_NO_NETWORK",
                })
              )
            : i.a.createElement(
                "div",
                {
                  className:
                    "login-pass reg-padding flx flx-1 flx-col flx-al-c no-network-page win",
                },
                i.a.createElement("img", {
                  src: re,
                  className: "sign-in-logo",
                }),
                i.a.createElement(pt.a, {
                  className: "icon-disconnect no-network-icon",
                }),
                i.a.createElement(d.a, {
                  textKey: "STR_CANT_CONNECT_1",
                  tagName: "div",
                  className: "no-network-title",
                }),
                i.a.createElement(d.a, {
                  textKey: "STR_CANT_CONNECT_3",
                  tagName: "div",
                  className: "no-network-desc",
                }),
                i.a.createElement("div", { className: "flx-1" }),
                i.a.createElement(ne.a, {
                  type: "tertiary-neutral",
                  size: "medium",
                  textKey: "STR_BACK_TO_LOGIN",
                  onClick: function () {
                    t(Kt), a();
                  },
                })
              )
        );
      }
      var Vt = a("Nd7d"),
        Qt = a("AtyM"),
        Bt = a("Uqjx"),
        Ht = a("rkiK");
      const zt = a("NLsH"),
        { ipcRenderer: Yt } = zt;
      let Xt = 0,
        Zt = 3;
      function $t(e) {
        let { qrcodeImg: t, onClose: a } = e;
        function s() {
          a && a();
        }
        return i.a.createElement(
          "div",
          { className: "qr-guide", onClick: s },
          i.a.createElement(
            "div",
            {
              className: "qr-guide__content",
              onClick: (e) => {
                e.preventDefault(), e.stopPropagation();
              },
            },
            i.a.createElement("img", { src: re, className: "sign-in-logo" }),
            i.a.createElement(d.a, {
              textKey: "STR_SCAN_QR_GUIDE",
              tagName: "div",
              className: "sigin-title",
            }),
            i.a.createElement("img", { src: t, className: "qr-guide__img" }),
            i.a.createElement(
              "div",
              { className: "qr-guide__steps" },
              i.a.createElement("div", {
                className:
                  "v-line" +
                  (ae.default.currentLanguage() === S.LANG_INDEX_EN
                    ? " eng"
                    : ""),
              }),
              i.a.createElement(
                "div",
                { className: "flx flx-al-c step-line first-line" },
                i.a.createElement("div", { className: "num" }, "1"),
                i.a.createElement(d.a, {
                  textKey: "STR_QR_GUIDE_LINE1",
                  tagName: "div",
                  className: "desc",
                })
              ),
              i.a.createElement(
                "div",
                { className: "flx flx-al-c step-line" },
                i.a.createElement("div", { className: "num" }, "2"),
                i.a.createElement(
                  "div",
                  { className: "flx flx-al-c desc line-2" },
                  i.a.createElement(d.a, {
                    textKey: "STR_QR_GUIDE_LINE2_1",
                    tagName: "div",
                  }),
                  i.a.createElement("i", {
                    className: "fa fa-qrcode-icon",
                    style: {
                      fontSize: "var(--f24)",
                      marginLeft: "5px",
                      marginRight: "5px",
                    },
                  }),
                  i.a.createElement(d.a, {
                    textKey: "STR_QR_GUIDE_LINE2_2",
                    tagName: "div",
                  })
                )
              ),
              i.a.createElement(
                "div",
                { className: "flx flx-al-c step-line" },
                i.a.createElement("div", { className: "num" }, "3"),
                i.a.createElement(d.a, {
                  textKey: "STR_QR_GUIDE_LINE3",
                  tagName: "div",
                  className: "desc",
                })
              )
            ),
            i.a.createElement("div", { className: "flx-1" }),
            i.a.createElement(ne.a, {
              textKey: "STR_CLOSE",
              type: "tertiary-neutral",
              onClick: s,
              style: { marginTop: "24px" },
              size: "large",
            })
          )
        );
      }
      class Jt extends i.a.Component {
        constructor(e) {
          super(e),
            (this._getQRCode = this._getQRCode.bind(this)),
            (this.tryLoadQR = this.tryLoadQR.bind(this)),
            (this.dispatch = e.dispatch),
            (this.state = {
              isRemember: e.isRemember,
              showGuide: !1,
              menuShown: !1,
              didloadqr: !1,
            });
        }
        componentWillReceiveProps(e) {
          this.props.isRemember !== e.isRemember &&
            this.setState({ isRemember: e.isRemember });
        }
        componentWillMount() {
          this.tryLoadQR();
        }
        componentWillUnmount() {
          this.timer && (clearTimeout(this.timer), (this.timer = null));
        }
        get Logger() {
          return (
            this._Logger ||
              (this._Logger = fe.ModuleContainer.resolve(
                Re.ZLoggerFactory
              ).createZLogger("pc", ["loginqr"])),
            this._Logger
          );
        }
        tryLoadQR(e = !1) {
          (this.props.state.qrErrorMessage ||
            !this.props.state.qrcodeImg ||
            e) &&
            this._getQRCode();
        }
        _getQRCode() {
          if (this.overQRRequest) return;
          this.props.isVisible && Q(B.LOGIN_STEP_GET_QR),
            this.setState({ timeout: 0 }),
            this.timer && (clearTimeout(this.timer), (this.timer = null));
          let e = ut.a.getUidLogin();
          const t = u.default.authDomain,
            a = (e = !1) => {
              const t = () => {
                this.setState({ didloadqr: !e });
              };
              e
                ? t()
                : setTimeout(() => {
                    t();
                  }, 2e3);
            };
          a(!0);
          const s = (e) => {
            (this.overQRRequest = !0),
              setTimeout(() => {
                Ze.a.onSucess();
              }, 0),
              this.dispatch({
                type: w,
                payload: ae.default.str("STR_QR_ERROR_REQUEST_LIMIT"),
                qrErrorCode: 18012,
              });
            let t = 12e4;
            e &&
              e.data.data &&
              e.data.data.time_left &&
              (t = e.data.data.time_left),
              this.setState({ timeout: t, didloadqr: !0 }),
              (this.timer = setInterval(() => {
                const e = this.state.timeout - 1e3;
                e <= 0
                  ? ((Xt = 0),
                    (this.overQRRequest = !1),
                    this.setState({ timeout: 0 }),
                    this.dispatch({
                      type: w,
                      payload: ae.default.str("STR_QR_EXPIRED"),
                    }),
                    this.timer &&
                      (clearInterval(this.timer), (this.timer = null)))
                  : this.setState({ timeout: e });
              }, 1e3));
          };
          Xt > Zt
            ? s()
            : p.default
                .getQRCode(
                  m.default.getZaloClientID(),
                  e,
                  ae.default.getCurrentLanguageName()
                )
                .then((e) => {
                  if (
                    (this.Logger.zsymb(3, 11654, 3e4, "axios getQRCode"),
                    e.data.data && 0 === e.data.error_code)
                  ) {
                    setTimeout(() => {
                      Ze.a.onSucess();
                    }, 0),
                      this.dispatch({ type: w, payload: "" }),
                      this.dispatch({ type: L, payload: e });
                    let t = m.default;
                    this.props.isVisible && Q(B.LOGIN_STEP_WAITING_SCAN);
                    let a = 91059,
                      s = Date.now(),
                      n = Qt.a.now();
                    (Zt = e.data.data.qr_retry),
                      t
                        .awaitQRScan(
                          e.data.data.chk_wait_scan,
                          e.data.data.qr_timeout,
                          Zt
                        )
                        .then(
                          (i) => (
                            this.dispatch({
                              type: G,
                              payload: {
                                currentDisplayName: i.display_name,
                                currentAvatar: i.avatar,
                              },
                            }),
                            this.dispatch({ type: M }),
                            Q(B.LOGIN_STEP_WAITING_CONFIRM),
                            ot.default.increaseSuccess(a, 0, Qt.a.now() - n),
                            (a = 91060),
                            (s = Date.now()),
                            (n = Qt.a.now()),
                            t.awaitQRConfirm(
                              e.data.data.chk_wait_cfirm,
                              e.data.data.qr_timeout,
                              Zt
                            )
                          )
                        )
                        .then(() => {
                          ot.default.increaseSuccess(a, 0, Qt.a.now() - n), O();
                        })
                        .catch((e) => {
                          this.dispatch({
                            type: G,
                            payload: {
                              currentDisplayName: "",
                              currentAvatar: "",
                            },
                          });
                          let t = "number" == typeof e ? e : -1;
                          18010 == e
                            ? (this.tryLoadQR(!0),
                              this.dispatch({
                                type: M,
                                payload: {
                                  errorMessage: ae.default.str(
                                    "STR_REMEMBER_LOGIN_REJECTED"
                                  ),
                                },
                              }))
                            : (-10 == e
                                ? this.Logger.zsymb(
                                    21,
                                    11654,
                                    30001,
                                    "qr timeout {}",
                                    e
                                  )
                                : this.Logger.zsymb(
                                    21,
                                    11654,
                                    30002,
                                    "login fail {}",
                                    e
                                  ),
                              this.dispatch({
                                type: w,
                                payload: ae.default.str("STR_QR_EXPIRED"),
                              })),
                            ot.default.increaseFailed(
                              a,
                              0,
                              Qt.a.now() - n,
                              t,
                              s
                            );
                        });
                  } else {
                    if (e.data && 18012 == e.data.error_code) s(e);
                    else {
                      if (e.request && e.request.responseURL)
                        try {
                          let a = new URL(e.request.responseURL),
                            s = new URL(t);
                          a &&
                            s &&
                            a.origin &&
                            s.origin &&
                            a.origin !== s.origin &&
                            setTimeout(() => {
                              Ze.a.onError(e.status, t, e.request.responseURL);
                            }, 0);
                        } catch (a) {}
                      else
                        e &&
                          e.status &&
                          setTimeout(() => {
                            Ze.a.onError(e.status, t, !1, 200 !== e.status);
                          }, 0);
                      this.dispatch({
                        type: w,
                        payload:
                          ae.default.str("STR_QR_ERROR_UNKNOWN") +
                          (e.data && e.data.error_code
                            ? ` (${e.data.error_code})`
                            : ""),
                      });
                    }
                    this.Logger.zsymb(18, 11654, 30003, e.data.error_message);
                  }
                })
                .catch((e) => {
                  var s;
                  this.Logger.zsymb(21, 11654, 30004, "getQRCode error {}", e),
                    a(),
                    this.dispatch({
                      type: w,
                      payload:
                        -10 === e
                          ? ae.default.str("STR_QR_EXPIRED")
                          : 111 ===
                            (null == e || null === (s = e.data) || void 0 === s
                              ? void 0
                              : s.error_code)
                          ? ae.default.str("STR_TOAST_CONNECTION_FAILED")
                          : ae.default.str("STR_ERROR_OCCURED"),
                    }),
                    !e ||
                      ("ERR_NO_NETWORK" !== e.code &&
                        "ERR_CONNECTION_TIMED_OUT" !== e.code) ||
                      setTimeout(() => {
                        Ze.a.onError(e.code, t);
                      }, 0);
                });
        }
        _showTips() {
          this.dispatch({ type: D });
        }
        _hideTips() {
          this.dispatch({ type: U });
        }
        _checkRemember() {
          this.props.checkRemember &&
            this.props.checkRemember(!this.state.isRemember),
            this.setState({ isRemember: !this.state.isRemember });
        }
        onShowOtherOptionsMenu(e) {
          this.otherOptionsMenuRef &&
            this.otherOptionsMenuRef.show(e, this.otherOptionsRef);
        }
        getQRLoadingUI() {
          return this.state.didloadqr
            ? null
            : i.a.createElement(
                "div",
                {
                  className:
                    "flx flx-col flx-al-c flx-center absolute h100 w100",
                  style: { background: "var(--layer-background)" },
                },
                i.a.createElement(Vt.a, { size: 36 }),
                i.a.createElement(d.a, {
                  textKey: "STR_LOADING_ETC",
                  tagName: "div",
                  className: "margin-top-8",
                })
              );
        }
        getQRIntroduction(e = {}) {
          const { qrData: t } = e;
          if (t && t.introduction) {
            let e = t.introduction.formatted;
            const a = t.introduction.localized;
            if ("string" == typeof e && Array.isArray(a)) {
              const t = ae.default.getCurrentLanguageName();
              for (let s = 0; s < a.length; s++) {
                const n = a[s];
                if (n) {
                  const a = n[t.toLowerCase()];
                  a && (e = e.replace(`$${s}$`, a));
                }
              }
              return i.a.createElement(Bt.a, {
                className: "mt-16 mb-8",
                config: { ALLOWED_ATTR: ["class"] },
                html: e,
              });
            }
          }
          return i.a.createElement(d.a, {
            textKey: "STR_QR_GUIDE",
            className: "qr-guide-title",
          });
        }
        render() {
          let e = null;
          const t = this.props.state;
          let a = t.qrErrorMessage;
          18012 === t.qrErrorCode &&
            this.state.timeout &&
            (a = ae.default.trans("STR_QR_ERROR_REQUEST_LIMIT", [
              Math.floor(this.state.timeout / 60 / 1e3),
              Math.round((this.state.timeout / 1e3) % 60),
            ]));
          let s = null;
          const { currentAvatar: n, currentDisplayName: o } = t;
          n &&
            o &&
            (s = i.a.createElement(
              "div",
              { className: "qr-ava-overlay flx flx-al-c flx-col" },
              i.a.createElement("img", { src: n, className: "qr-ava" }),
              i.a.createElement(et.a, { className: "qr-name truncate" }, o),
              i.a.createElement(d.a, {
                textKey: "STR_QR_AWAIT_DESC",
                tagName: "div",
                className: "qr-desc",
              })
            ));
          this.props.onSignInOther;
          return (
            (e = i.a.createElement(
              "div",
              {
                id: "qrcode",
                className:
                  "flx flx-col flx-al-c h100 " +
                  (t.qrNeedsRefresh ? " disabled" : ""),
              },
              s ||
                i.a.createElement(
                  "div",
                  { id: "qrcode-container" },
                  i.a.createElement("img", {
                    id: "qrcode-img",
                    className: t.qrNeedsRefresh ? " disabled" : "",
                    src: t.qrcodeImg,
                    style:
                      t.qrNeedsRefresh && a
                        ? { opacity: this.qrErrorFromLoad ? 0 : 0.9 }
                        : null,
                    onLoad: () => {
                      (this.qrErrorFromLoad = !1),
                        this.setState({ didloadqr: !0 });
                    },
                    onError: () => {
                      (this.qrErrorFromLoad = !0),
                        setTimeout(() => {
                          this.setState({ didloadqr: !0 });
                        }, 2e3);
                    },
                  }),
                  t.qrNeedsRefresh && a
                    ? i.a.createElement(
                        "div",
                        {
                          id: "qrcode-expired",
                          className: "qrcode-expired",
                          onClick: () => {
                            this.overQRRequest ||
                              (Xt++,
                              this.props.dispatch({ type: M }),
                              setTimeout(() => {
                                this._getQRCode();
                              }, 0));
                          },
                        },
                        i.a.createElement(
                          "div",
                          {
                            className:
                              "flx flx-col flx-center flx-al-c qr-reload-container" +
                              (this.overQRRequest ? " not-allowed" : ""),
                          },
                          i.a.createElement(pt.a, {
                            className: this.overQRRequest
                              ? "icon-outline-report"
                              : "outline-reload",
                          }),
                          this.overQRRequest
                            ? null
                            : i.a.createElement(d.a, {
                                textKey: "STR_CLICK_TO_RETRY",
                                className: "reload-title",
                              })
                        )
                      )
                    : null,
                  this.getQRLoadingUI()
                ),
              a && this.state.didloadqr
                ? i.a.createElement("div", { className: "error-message" }, a)
                : null,
              s
                ? null
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    this.getQRIntroduction(t),
                    i.a.createElement(
                      "div",
                      {
                        className: "flx flx-al-c dark-href",
                        onClick: () => {
                          this.setState({ showGuide: !0 });
                        },
                      },
                      i.a.createElement(d.a, {
                        textKey: "STR_SIGNIN_QR_GUIDE",
                      }),
                      i.a.createElement(pt.a, {
                        className: "outline-ask margin-left-4",
                        style: { marginRight: "-5px" },
                      })
                    )
                  ),
              1 == this.props.configOptionRemember
                ? i.a.createElement(
                    "p",
                    {
                      className: "login-page__main-bottom",
                      style: { textAlign: "center", width: "170px" },
                      onClick: this._checkRemember.bind(this),
                    },
                    i.a.createElement("i", {
                      className:
                        "clickable" +
                        (this.state.isRemember
                          ? " fa fa-fill-checkbox-square"
                          : " fa fa-uncheckbox-square"),
                      style: {
                        color: "var(--text-information)",
                        fontSize: "14px",
                        cursor: "pointer",
                        position: "relative",
                        top: "2px",
                      },
                    }),
                    i.a.createElement(d.a, {
                      className: "clickable",
                      textKey: "STR_REMEMBER_SESSION",
                      style: { paddingLeft: "6px" },
                    })
                  )
                : null,
              i.a.createElement("div", { className: "flx-1" }),
              i.a.createElement(ne.a, {
                size: "large",
                textKey: "STR_SIGNIN_BY_MOBILE",
                onClick: this.props.onSignInOther,
                className: "margin-auto",
                type: "tertiary-neutral",
              }),
              this.state.showGuide &&
                i.a.createElement($t, {
                  qrcodeImg: t.qrcodeImg,
                  onClose: () => {
                    this.setState({ showGuide: !1 });
                  },
                })
            )),
            i.a.createElement("div", { className: "login-qr h100" }, e)
          );
        }
      }
      class ea extends i.a.Component {
        constructor(e) {
          super(e),
            (this.dispatch = e.dispatch),
            (this.activeType = 1),
            (this.accessToken = null),
            (this._onLoginSuccess = this._onLoginSuccess.bind(this)),
            (this.isMaybeReq = this.isMaybeReq.bind(this)),
            (this._isFocus = !0),
            (this._onVisiblityChanged = (e, t) => {
              switch (t) {
                case "blur":
                  (document.body.className = document.body.className.replace(
                    " active",
                    ""
                  )),
                    (this._isFocus = !1);
                  break;
                case "focus":
                  document.body.className.indexOf("active") < 0 &&
                    (document.body.className += " active"),
                    !this._isFocus && this.LoginPassword
                      ? ((this._isFocus = !0),
                        this.LoginPassword.getLoginCaptcha())
                      : (this._isFocus = !0);
              }
            }),
            (this.state = {
              recentdata: m.default.getMostRecentLoggedInData(),
              configOptRemember: this.getConfigOptionRemember(),
              languageSelection: ae.default.currentLanguage(),
              isMenuShow: !1,
              innerLoginPwState: 0,
              refresh: !1,
              showNoNetwork: !1,
            }),
            ae.default.loadDBLanguage(),
            (this.pendingReq = !1),
            dt.p.listenEvent(dt.j, (e) => {
              this.pendingReq &&
                e == ht.a.CONNECTED &&
                ((this.pendingReq = !1), this.getServerConfig());
            }),
            s.default.checkNetwork((e) => {
              this.setState({ showNoNetwork: !e });
            }),
            Yt.on("noti-click", (e, t) => {
              this.focusMainWindow();
            }),
            Yt.on("noti-leftbutton-click", (e, t) => {
              if (t && t.additionInfos && t.additionInfos.leftFunc) {
                this[t.additionInfos.leftFunc](t);
              }
            }),
            Yt.on("noti-close", (e, t) => {
              lt.e.logAction(19003), lt.e._log();
            }),
            this.setConfigOptionRememberWhenLoginSuccess(
              this.state.configOptRemember
            ),
            this.initStateRemember(),
            (this._checkRemember = this._checkRemember.bind(this)),
            (this.showMenu = (e, t) => {
              this.menu && this.menu.show(e, t);
            }),
            (this.refresh = () => {
              this.setState({ refresh: !this.state.refresh });
            });
        }
        componentWillReceiveProps(e) {
          this.props.state.common.visibleComponentName !==
            e.state.common.visibleComponentName &&
            ("LOGIN_QR" === e.state.common.visibleComponentName
              ? (this.lastTabIndex = 0)
              : "LOGIN_PASSWORD" === e.state.common.visibleComponentName &&
                (this.lastTabIndex = 1));
        }
        initStateRemember() {
          (this.state.isRemember =
            this.state.configOptRemember !== S.OPTION_SHOW_CHECKBOX ||
            !this.state.recentdata ||
            !s.default.valueValid(this.state.recentdata.isRemember) ||
            this.state.recentdata.isRemember),
            (this.lastTabIndex = this.getLastLoginTab()),
            m.default.setValueRememberLogin(this.state.isRemember);
        }
        getConfigOptionRemember() {
          let e = Ne.a.getInstance().getItem(S.KEY_CONFIG_OPTION_REMEMBER);
          return (
            s.default.valueValid(e) ||
              ((e = S.OPTION_DEFAULT_REMEMBER),
              (this._needUpdateStateRemember = !0)),
            "number" != typeof e &&
              (e =
                "string" == typeof e ? parseInt(e) : S.OPTION_DEFAULT_REMEMBER),
            (e > 2 || e < 0) && (e = S.OPTION_DEFAULT_REMEMBER),
            e
          );
        }
        setConfigOptionRememberWhenLoginSuccess(e) {
          Ne.a.getInstance().setItem(S.KEY_CONFIG_NEW_REMEMBER, e);
        }
        isMaybeReq(e) {
          return (
            this._isFocus && this.props.state.common.visibleComponentName === e
          );
        }
        _loginQR() {
          this.dispatch({ type: M }),
            Q(B.LOGIN_STEP_ENTER_LOGIN_QR),
            this.LoginQR && this.LoginQR.tryLoadQR();
        }
        _onGetImei() {
          Yt.send(
            "get-imei-resp",
            m.default.getZaloClientID(),
            "unknown",
            u.default.auto_updater
          );
        }
        _loginPass() {
          this.dispatch({ type: k }), Q(B.LOGIN_STEP_ENTER_LOGIN_PASS);
        }
        componentDidMount() {
          Xe.a.isInited() || Xe.a.init(),
            Yt.on("visibility-change", this._onVisiblityChanged),
            Yt.on("get-imei", this._onGetImei),
            ht.b.getStateNetwork() == ht.a.DISCONNECT
              ? (this.pendingReq = !0)
              : setTimeout(() => {
                  this.getServerConfig();
                }, 100),
            (this.updateLanguage = () => {
              this.setState({
                languageSelection: ae.default.currentLanguage(),
              });
            }),
            ae.default.callUpdate(this.updateLanguage),
            Ht.default.end(Ht.MetricName.start_up_time);
        }
        componentWillUnmount() {
          Yt.removeListener("visibility-change", this._onVisiblityChanged),
            Yt.removeListener("get-imei", this._onGetImei),
            ae.default.removeUpdate(this.updateLanguage);
        }
        get Logger() {
          return (
            this._Logger ||
              (this._Logger = fe.ModuleContainer.resolve(
                Re.ZLoggerFactory
              ).createZLogger("main", ["login"])),
            this._Logger
          );
        }
        getServerConfig() {
          this.timeoutReq &&
            (clearTimeout(this.timeoutReq), (this.timeoutReq = null)),
            (this.pendingReq = !1);
          const e = (e) => {
            const t = Ne.a.getInstance();
            if (e.config_option_remember) {
              let a = e.config_option_remember;
              ["number", "string"].includes(typeof a) &&
                ("string" == typeof a && (a = parseInt(a)),
                !isNaN(a) &&
                  a >= 0 &&
                  a <= 2 &&
                  (t.setItem(S.KEY_CONFIG_OPTION_REMEMBER, a),
                  this._needUpdateStateRemember &&
                    (this.setConfigOptionRememberWhenLoginSuccess(a),
                    this.setState({ configOptRemember: a }),
                    (this._needUpdateStateRemember = !1))));
            }
            if (e.sentry_config) {
              a("2ua2").default.saveSentryConfig(e.sentry_config);
            }
            e.auto_relaunch_mode &&
              e.auto_relaunch_timeout &&
              Yt.send(
                "receive-relaunch-mode",
                e.auto_relaunch_mode,
                e.auto_relaunch_timeout
              ),
              t.checkExist("l-lg-t") ||
                ((this.lastTabIndex = e.default_login_method || 0),
                this.refresh()),
              this.checkHasNewMsg(e.prelogin_operate);
          };
          let t = _t.b.getServerConfig();
          t.already_fetch_server_info_first_time
            ? t && e(t)
            : _t.b.getServerInfo().then(() => {
                (t = _t.b.getServerConfig()), t && e(t);
              });
        }
        checkHasNewMsg(e) {
          if (!e || !e.is_enable) return;
          if (!m.default.getLastViewKey(m.default.getLastUserId()))
            return void this.Logger.zsymb(
              3,
              11654,
              30005,
              "hasNewMsg no viewerkey"
            );
          const t = e.req_configs.timeline,
            a = this.checkHasNewMsgTimes || 0;
          if (a < t.length) {
            const s = t[a],
              n = 60;
            setTimeout(() => {
              m.default.hasNewMsg().then((t) => {
                this.Logger.zsymb(3, 11654, 30006, "hasNewMsg result {}", t),
                  this.setHasNewMsg(t, e.toast_notify),
                  this.checkHasNewMsg(e);
              });
            }, s * n * 1e3 + Math.floor(Math.random() * e.req_configs.extra_time) * n * 1e3);
          }
          this.checkHasNewMsgTimes = a + 1;
        }
        focusMainWindow() {
          Yt.send("focus-window");
          let e = null;
          switch (this.checkHasNewMsgTimes || 0) {
            case 1:
              e = 1900201;
              break;
            case 2:
              e = 1900202;
              break;
            case 3:
              e = 1900203;
              break;
            case 4:
              e = 1900204;
          }
          e && (lt.e.logAction(e), lt.e._log());
        }
        setHasNewMsg(e, t) {
          if (e) {
            const e =
                t && t[ae.default.getCurrentLanguageName()]
                  ? t[ae.default.getCurrentLanguageName()]
                  : t.vi,
              a = {
                leftButtonText:
                  e && e.button_content
                    ? e.button_content
                    : ae.default.str("STR_VIEWMORE"),
                leftFunc: "focusMainWindow",
                rightButtonText: null,
                rightFunc: null,
                size: { w: 324, h: 80 },
                eventOnClose: !0,
              };
            rt.a.createNotify(
              e && e.title ? e.title : ae.default.str("STR_NEW_MESSAGE_LONG"),
              "",
              t && t.icon
                ? t.icon
                : "https://chat.zalo.me/favicon-96x96.v1.png",
              null,
              null,
              !1,
              2,
              a
            ),
              lt.e.logAction(19001),
              lt.e._log();
          }
          ct.a.send(0);
        }
        _toggleRegister(e) {
          (this.activeType = 1),
            e
              ? this.state.recentdata
                ? this.props.dispatch({
                    type: F,
                    payload: {
                      title: ae.default.str("STR_ZALO_CONFIRM_TITLE"),
                      message: ae.default.str(
                        "STR_CONFIRM_CANCEL_LOGIN_FOR_REGISTRATION"
                      ),
                      compact: !0,
                      confirmText: ae.default.str("STR_YES"),
                      cancelText: ae.default.str("STR_NO"),
                      callback: (e) => {
                        this.props.dispatch({ type: F }),
                          e &&
                            (m.default.setMostRecentLoggedInUserInfo(null),
                            m.default.removeLastViewKey(),
                            m.default.setLastUserId(null),
                            this.setState({ recentdata: null }),
                            this.dispatch({ type: x }));
                      },
                    },
                  })
                : this.dispatch({ type: x })
              : this.props.state.pass.security
              ? this.props.dispatch({ type: b, payload: "" })
              : this.dispatch({ type: this.lastTabIndex ? k : M });
        }
        _toggleForgotPassword(e, t, a) {
          (this.activeType = 3),
            (this.defaultPhoneNumber = e),
            (this.defaultCountryIsoCode = t),
            (this.defaultCountryCode = a),
            this.dispatch({ type: x });
        }
        _onLoginSuccess() {
          O();
        }
        _signInAnother(e) {
          this.Logger.zsymb(3, 11654, 30007, "sign in as another user"),
            this.props.dispatch({ type: W }),
            e && this.state.recentdata
              ? this.props.dispatch({
                  type: F,
                  payload: {
                    title: "Zalo",
                    message: ae.default.str(
                      "STR_SIGNIN_CONFIRM_ANOTHER_ACCOUNT"
                    ),
                    compact: !0,
                    confirmText: ae.default.str("STR_YES"),
                    cancelText: ae.default.str("STR_NO"),
                    callback: (e) => {
                      this.props.dispatch({ type: F }),
                        e &&
                          (m.default.clearLastSignin(),
                          this.setState({ recentdata: null }),
                          this._checkRemember(!0, !1));
                    },
                  },
                })
              : (m.default.setMostRecentLoggedInUserInfo(null),
                m.default.removeLastViewKey(),
                m.default.setLastUserId(null),
                this.setState({ recentdata: null }),
                this._checkRemember(!0, !1));
        }
        _changeStepLoginQrCode() {
          this.props.state.pass.security &&
            (this.props.state.pass.security = !1),
            this._loginQR();
        }
        _checkRemember(e, t = !0) {
          m.default.setValueRememberLogin(e),
            t && m.default.setValueActionLogRemember(e ? 117066 : 117067),
            this.setState({ isRemember: e });
        }
        onShowMenu(e) {
          this.showMenu(e, this.menuBtn);
        }
        closeMenu() {
          this.menu && this.menu.close();
        }
        onChangeLanguage(e) {
          ae.default.changeToLang(e),
            this.setState({ languageSelection: e }),
            Yt && Yt.send("language-change", e),
            this.closeMenu();
        }
        onOpenAbout() {
          this.props.dispatch &&
            this.props.dispatch({ type: it.PopupActions.TOGGLE_APP_INFO }),
            this.closeMenu();
        }
        onOpenDevTools() {
          this.closeMenu();
        }
        changeAdminConfig(e) {
          let t = !!u.default.adminConfig[e];
          if (
            ((u.default.adminConfig[e] = !t),
            this.forceUpdate(),
            "onStagingDevAuth" === e)
          )
            (_.b.onStagingDevAuth = !0),
              Object(u.ChangeToDevDomain)("authDomain");
          else if ("removeImei" === e)
            try {
              Ne.a.getInstance().removeItem("z_uuid");
            } catch (a) {}
        }
        getAdminConfigs() {
          return [];
        }
        setLastLoginTab(e) {
          Ne.a.getInstance().setItem("l-lg-t", e);
        }
        getLastLoginTab() {
          let e = Ne.a.getInstance().getItem("l-lg-t");
          return (e = e ? JSON.parse(e) : 1), e;
        }
        onPwChangeView(e) {
          this.props.onChangeView && this.props.onChangeView(e),
            this.setState({ innerLoginPwState: e });
        }
        _renderSecurityAuth() {
          const e = this.props.state.pass.lastData;
          switch (e.eCode) {
            case le.a.SECURITY_QUESTION_REQUIRED:
            case le.a.PASSWORD_NOT_SET:
              return i.a.createElement(ge, {
                data: e,
                dispatch: this.props.dispatch,
                onBack: () => this._toggleRegister(!1),
                onLoginSuccess: this._onLoginSuccess,
              });
            case le.a.SENSITIVE_FLOW_REQUIRE_OTP_OR_CONFIRM_MOBILE:
            case le.a.SENSITIVE_FLOW_REQUIRE_OTP: {
              let t = "confirm_mobile";
              return (
                e.questionData && e.questionData.default_option
                  ? (t = e.questionData.default_option)
                  : e.eCode === le.a.SENSITIVE_FLOW_REQUIRE_OTP && (t = "otp"),
                i.a.createElement(Ut, {
                  dispatch: this.props.dispatch,
                  defaultOption: t,
                  state: this.props.state,
                })
              );
            }
            default:
              return null;
          }
        }
        loginWithMobileRequest() {
          this.props.dispatch({ type: V }),
            setTimeout(() => {
              this._signInAnother(!1);
            }, 1e3);
        }
        render() {
          let e;
          const t = "REGISTER" === this.props.state.common.visibleComponentName;
          let a =
              "MOBILE_LOGIN" === this.props.state.common.visibleComponentName,
            s =
              !(
                !t ||
                !this.props.state.common.lastData ||
                void 0 === this.props.state.common.lastData.answerSecurityFail
              ) && this.props.state.common.lastData.answerSecurityFail,
            n = null;
          this.state.showNoNetwork && (n = i.a.createElement(jt, null));
          const o = (e) => {
            let t = `:flag-${e}:`;
            return i.a.createElement("span", {
              className: "emoji-sizer emoji-outer ",
              style:
                ((a = t),
                {
                  background: `url(${u.default.emojiImg})`,
                  backgroundSize: "5100%",
                  backgroundPosition: u.default.emojiMapPos[a],
                  WebkitUserDrag: "none",
                  marginLeft: "5px",
                  verticalAlign: "text-bottom",
                  height: "20px",
                }),
            });
            var a;
          };
          if (this.props.state.pass.security)
            e = i.a.createElement(
              "div",
              {
                id: "loginPageMain",
                className:
                  " login-page__content__container h100 login-padding flx flx-col ",
              },
              i.a.createElement("img", { src: re, className: "sign-in-logo" }),
              this._renderSecurityAuth()
            );
          else if (t) {
            this.props.state.common.lastData &&
              this.props.state.common.lastData.activeType &&
              (this.activeType = this.props.state.common.lastData.activeType);
            let t =
                this.props.state.common.lastData &&
                this.props.state.common.lastData.verifyType
                  ? this.props.state.common.lastData.verifyType
                  : null,
              a =
                this.props.state.common.lastData &&
                this.props.state.common.lastData.quotaInfo
                  ? this.props.state.common.lastData.quotaInfo
                  : [];
            e = i.a.createElement(
              "div",
              { className: "flx flx-center flx-1 h0" },
              i.a.createElement(Ye, {
                dispatch: this.props.dispatch,
                activeType: this.activeType,
                accessToken: this.accessToken,
                lastData: this.props.state.common.lastData,
                phoneNumber: this.defaultPhoneNumber,
                countryIsoCode: this.defaultCountryIsoCode,
                countryCode: this.defaultCountryCode,
                answerSecurityFail: s,
                verifyType: t,
                verifyTypes: a,
                onLogin: () => this._toggleRegister(!1),
              })
            );
          } else if (a)
            e = i.a.createElement(Ft, {
              data: this.LoginPassword
                ? {
                    phone: this.LoginPassword.state.phoneNumber,
                    iso: this.LoginPassword.state.countryIsoCode,
                    code: this.LoginPassword.state.countryCode,
                  }
                : this.state.recentdata,
              state: this.props.state.pass,
              dispatch: this.props.dispatch,
              onBack: () => {
                this.props.dispatch(
                  this.lastTabIndex
                    ? { type: k, payload: { errorMessage: "" } }
                    : { type: M }
                );
              },
            });
          else {
            let t = i.a.createElement(nt, {
                ref: (e) => (this.LoginPassword = e),
                state: this.props.state.pass,
                recentdata: this.state.recentdata,
                isVisible:
                  "LOGIN_PASSWORD" ===
                  this.props.state.common.visibleComponentName,
                dispatch: this.props.dispatch,
                onForgotPasswordClick: (...e) =>
                  this._toggleForgotPassword(...e),
                visibleComponentName:
                  this.props.state.common.visibleComponentName,
                signInAnother: this._signInAnother.bind(this),
                signInWithMobileRequest: this.loginWithMobileRequest.bind(this),
                isMaybeReq: this.isMaybeReq,
                checkRemember: this._checkRemember,
                configOptionRemember: this.state.configOptRemember,
                isRemember: this.state.isRemember,
                onSignUp: () => this._toggleRegister(!0),
                onChangeView: this.onPwChangeView.bind(this),
                innerState: this.state.innerLoginPwState,
              }),
              a = "STR_LOGIN_ACCOUNT";
            e = i.a.createElement(
              "div",
              {
                id: "loginPageMain",
                className:
                  " login-page__content__container h100 login-padding flx flx-col ",
              },
              i.a.createElement("img", { src: re, className: "sign-in-logo" }),
              i.a.createElement(d.a, {
                textKey: a,
                className: "sigin-title",
                tagName: "div",
              }),
              i.a.createElement(gt, {
                onChange: (e) => {
                  (this.lastTabIndex = e),
                    this.setLastLoginTab(e),
                    this.setState({ initialState: 0 }, () => {
                      0 === e
                        ? this.props.dispatch({ type: M })
                        : 1 === e &&
                          this.props.dispatch({
                            type: k,
                            payload: { errorMessage: "" },
                          });
                    });
                },
                tabOnly: this.state.innerLoginPwState ? 1 : null,
                tabOffset:
                  void 0 !== this.lastTabIndex && null !== this.lastTabIndex
                    ? this.lastTabIndex
                    : 1,
                tabs: [
                  {
                    textKey: "STR_SIGNIN_QR",
                    domContent: i.a.createElement(Jt, {
                      state: this.props.state.qr,
                      ref: (e) => (this.LoginQR = e),
                      isVisible:
                        "LOGIN_QR" ===
                        this.props.state.common.visibleComponentName,
                      dispatch: this.props.dispatch,
                      checkRemember: this._checkRemember,
                      configOptionRemember: this.state.configOptRemember,
                      recentdata: this.state.recentdata,
                      isRemember: this.state.isRemember,
                      onSignUp: () => this._toggleRegister(!0),
                      onSignInOther: this.loginWithMobileRequest.bind(this),
                    }),
                  },
                  { textKey: "STR_SIGNIN_PASS", domContent: t },
                ],
              }),
              null
            );
          }
          let r;
          return (
            this.props.state.common.confirm &&
              (r = i.a.createElement(E.d, {
                visible: !0,
                onCloseConfirm: () =>
                  this.props.dispatch({ type: F, payload: null }),
                okType: this.props.state.common.confirm.type,
                compact: this.props.state.common.confirm.compact,
                preventPageClickForceClose:
                  this.props.state.common.confirm.preventPageClickForceClose,
                title: this.props.state.common.confirm.headerText,
                onOk: () => this.props.state.common.confirm.callback(!0),
                onCancel: (e, t) =>
                  this.props.state.common.confirm.callback(!1, t),
                okText: this.props.state.common.confirm.confirmText,
                cancelText: this.props.state.common.confirm.cancelText,
                message: this.props.state.common.confirm.message,
                width: this.props.state.common.confirm.width,
                zIndex: this.props.state.common.confirm.zIndex,
                windowContainer:
                  this.props.state.common.confirm.windowContainer,
                showCloseButton: !0,
              })),
            i.a.createElement(
              "div",
              {
                id: "loginPage",
                className: "flx flx-col default login-page w100",
              },
              n,
              r,
              i.a.createElement(
                "div",
                {
                  id: "loginPageContent",
                  className: "flx flx-col login-page__content w100",
                },
                e,
                undefined
              ),
              i.a.createElement(Je.default, {
                popoverProps: {
                  identity: {
                    windowId: tt.c,
                    name: S.PopoverIdentitiesDefine.SWITCH_LANGUAGE,
                  },
                },
                ref: (e) => (this.menu = e),
                onShow: () => {
                  this.setState({ isMenuShow: !0 });
                },
                onClose: () => {
                  this.setState({ isMenuShow: !1 });
                },
                items: [
                  {
                    type: Je.MENU_ITEM_TYPE.SUBMENU,
                    textKey: "STR_MENU_LANGUAGE",
                    items: [
                      {
                        text: "Tiếng Việt",
                        icon: { html: o("vn") },
                        onclick: () => this.onChangeLanguage(S.LANG_INDEX_VI),
                        checked:
                          this.state.languageSelection == S.LANG_INDEX_VI,
                      },
                      {
                        text: "English",
                        icon: { html: o("us") },
                        onclick: () => this.onChangeLanguage(S.LANG_INDEX_EN),
                        checked:
                          this.state.languageSelection == S.LANG_INDEX_EN,
                      },
                    ],
                  },
                  {
                    textKey: "STR_ABOUT",
                    onclick: this.onOpenAbout.bind(this),
                  },
                  ...this.getAdminConfigs(),
                ],
              })
            )
          );
        }
      }
      ea.propTypes = {
        state: h.a.object.isRequired,
        dispatch: h.a.func.isRequired,
      };
      var ta = ea,
        aa = a("y1FZ"),
        sa = a("J39W"),
        na = a("IeCS"),
        ia = a("/PY/"),
        oa = a("ro+J"),
        ra = a("Dprd"),
        ca = a("cHDa"),
        la = a("Q97H");
      class ha extends i.a.Component {
        constructor(e) {
          super(e),
            (this.state = { refresh: !1 }),
            (this._handleCloseApp = this._handleCloseApp.bind(this)),
            (this._onIgnoreBackwardAndForward =
              this._onIgnoreBackwardAndForward.bind(this)),
            this._clearLastLoginUserId();
        }
        _clearLastLoginUserId() {
          try {
            s.default.info("remove most recent logged in userId");
            const e = Ne.a.getInstance();
            e.removeItem(s.RECENT_USER_ID),
              "y" === e.getItem("already_login") &&
                e.removeItem("already_login");
          } catch (e) {
            s.default.error(e);
          }
        }
        componentDidMount() {
          Xe.a.isInited() || Xe.a.init("/login"),
            this._trackingRightAfterInstall(),
            s.default.isWeb() ||
              window.addEventListener(
                "mouseup",
                this._onIgnoreBackwardAndForward
              );
        }
        componentWillUnmount() {
          s.default.isWeb() ||
            window.removeEventListener(
              "mouseup",
              this._onIgnoreBackwardAndForward
            );
        }
        _onIgnoreBackwardAndForward(e) {
          (3 !== e.button && 4 !== e.button) || e.preventDefault();
        }
        _trackingRightAfterInstall() {
          ra.default
            .getInstallSource()
            .then(({ installSrc: e, justInstalled: t }) => {
              if (t && e) {
                Xe.a.trackEvent("distribution", "extra_install_launch", e);
                a("NLsH").ipcRenderer.send("login-after-install", e);
              }
            })
            .catch((e) => {
              s.default.error("Failed to get install resource ", e);
            });
        }
        _toggleAppInfo() {
          this.props.dispatch({ type: K });
        }
        _handleCloseApp() {
          const e = () => {
              ca.b.deactiveApp(),
                la.a.clearSessionBeforeQuit(),
                la.a.closeDB("do-quit");
            },
            t = m.default.getLastLogoutTime();
          if (Date.now() - t > 864e5) {
            let a = ae.default.str("STR_LOGOUT_CONFIRM_HEADER"),
              s = ae.default.str("STR_LOGOUT_CONFIRM_TEXT");
            if (!t) {
              a = ae.default.str("STR_LOGOUT_CONFIRM_HEADER_NEW");
              const e = [
                i.a.createElement(
                  "div",
                  { key: "1_a" },
                  i.a.createElement(d.a, {
                    textKey: "STR_LOGOUT_CONFIRM_TEXT_NEW_1_A",
                  }),
                  i.a.createElement("br", null),
                  i.a.createElement(d.a, {
                    textKey: "STR_LOGOUT_CONFIRM_TEXT_NEW_1_B",
                  })
                ),
                ae.default.str("STR_LOGOUT_CONFIRM_TEXT_NEW_2"),
              ];
              s = e[Math.floor(Math.random() * e.length)];
            }
            this.props.dispatch({
              type: F,
              payload: {
                headerText: a,
                message: s,
                preventPageClickForceClose: !0,
                type: "",
                zIndex: 1e4,
                confirmText: ae.default.str("STR_SIGNIN"),
                cancelText: ae.default.str("STR_MENU_QUIT"),
                callback: (t, a) => {
                  this.props.dispatch({ type: F }),
                    t
                      ? lt.e.logAction(117242)
                      : a === E.b.ModalClosedReason.CTAButtonClicked &&
                        (lt.e.logAction(117241),
                        setTimeout(() => {
                          e();
                        }, 600)),
                    lt.e._log();
                },
              },
            });
          } else e();
        }
        render() {
          return i.a.createElement(
            "div",
            {
              id: "loginIndex",
              className: "lg-index",
              style: { display: "none" },
            },
            i.a.createElement(aa.b, {
              hideMaximize: !0,
              loginMode: !0,
              dispatch: this.props.dispatch,
              onClose: this._handleCloseApp,
              onShowLoginMenu: (e, t) => {
                this.loginRef && this.loginRef.showMenu(e, t);
              },
              hideSetting:
                "REGISTER" === this.props.state.common.visibleComponentName ||
                "MOBILE_LOGIN" === this.props.state.common.visibleComponentName,
            }),
            i.a.createElement(
              "div",
              { className: "flx flx-center flx-1 h0" },
              i.a.createElement(
                "div",
                {
                  key: "main",
                  className: "dib fl-r lg-index__main flx-1 w100 h100 ",
                },
                i.a.createElement(
                  oa.a,
                  null,
                  i.a.createElement(
                    ta,
                    Object(c.a)({}, this.props, {
                      ref: (e) => (this.loginRef = e),
                      onChangeView: (e) =>
                        this.setState({ refresh: !this.state.refresh }),
                    })
                  )
                )
              )
            ),
            i.a.createElement(
              oa.a,
              null,
              this.props.state.common.showAppInfo
                ? i.a.createElement(sa.a, {
                    cancel: this._toggleAppInfo.bind(this),
                  })
                : null,
              this.props.state.common.showAppUpdateInfo
                ? i.a.createElement(na.default, {
                    info: this.props.state.common.showAppUpdateInfo,
                    cancel: () => {
                      $e.ModalManagerV2.closeModal({
                        windowId: tt.c,
                        name: S.ModalIdentitiesDefine.APP_UPDATE_INFO,
                      });
                    },
                  })
                : null,
              this.props.state.common.showAppDownloadUpdate
                ? i.a.createElement(ia.default, {
                    info: this.props.state.common.showAppDownloadUpdate,
                    cancel: () => {
                      $e.ModalManagerV2.closeModal({
                        windowId: tt.c,
                        name: S.ModalIdentitiesDefine.APP_DOWNLOAD_UPDATE,
                      });
                    },
                  })
                : null
            )
          );
        }
      }
      var da = ha,
        ua = a("j3R9");
      a("YaU7");
      a("vA3+").b,
        fe.ModuleContainer.resolve(Re.ZLoggerFactory).createZLogger("login", [
          "question",
        ]);
      i.a.Component;
      i.a.Component;
      const _a = {
          qrErrorMessage: "",
          qrNeedsRefresh: !1,
          qrErrorCode: null,
          qrData: null,
          qrcodeImg: "",
          showTips: !1,
          currentDisplayName: "",
          currentAvatar: "",
        },
        pa = {
          captchaImg: "",
          captchaToken: "",
          loginFail: !1,
          errorMessage: "Đăng nhập không thành công - Login failed",
          security: xt,
          lastData: null,
          phoneNumber: "",
          countryCode: 84,
        },
        ma = {
          confirm: null,
          errorMessage: "",
          lastData: null,
          showAppInfo: !1,
          showAppUpdateInfo: !1,
          showAppDownloadUpdate: !1,
          showSetting: !1,
          visibleComponentName: "LOGIN_PASSWORD",
        };
      const Ea = Object(ua.combineReducers)({
        qr: (e = _a, t) => {
          switch (t.type) {
            case L:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  qrcodeImg:
                    "data:image/png;base64," + t.payload.data.data.base64_qr,
                  qrNeedsRefresh: !1,
                }
              );
            case w: {
              const a = Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  qrErrorMessage: t.payload,
                  qrNeedsRefresh: !0,
                  qrErrorCode: null,
                }
              );
              return (
                null != t.qrNeedsRefresh &&
                  (a.qrNeedsRefresh = t.qrNeedsRefresh),
                null != t.qrErrorCode && (a.qrErrorCode = t.qrErrorCode),
                a
              );
            }
            case M: {
              const a = Object(g.a)(
                Object(g.a)({}, e),
                {},
                { qrNeedsRefresh: !1 }
              );
              return (
                t.payload &&
                  (t.payload.errorMessage &&
                    (a.qrErrorMessage = t.payload.errorMessage),
                  t.payload.data && (a.qrData = t.payload.data)),
                a
              );
            }
            case D:
              return Object(g.a)(Object(g.a)({}, e), {}, { showTips: !0 });
            case U:
              return Object(g.a)(Object(g.a)({}, e), {}, { showTips: !1 });
            case G:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  currentDisplayName: t.payload.currentDisplayName,
                  currentAvatar: t.payload.currentAvatar,
                }
              );
            case q:
              return _a;
            case k:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { qrErrorMessage: "" }
              );
            default:
              return e;
          }
        },
        pass: (e = pa, t) => {
          switch (t.type) {
            case k: {
              let a = Object(g.a)(
                Object(g.a)({}, e),
                {},
                { loginFail: !0, security: !1 }
              );
              return (
                t.payload &&
                  (null != t.payload.phoneNumber &&
                    (a = Object(g.a)(
                      Object(g.a)({}, a),
                      {},
                      {
                        phoneNumber: t.payload.phoneNumber,
                        countryCode: t.payload.countryCode,
                      }
                    )),
                  null != t.payload.errorMessage &&
                    (a = Object(g.a)(
                      Object(g.a)({}, a),
                      {},
                      { errorMessage: t.payload.errorMessage }
                    ))),
                a
              );
            }
            case v: {
              let a =
                [
                  le.a.SECURITY_QUESTION_REQUIRED,
                  le.a.PASSWORD_NOT_SET,
                  le.a.SENSITIVE_FLOW_REQUIRE_OTP_OR_CONFIRM_MOBILE,
                  le.a.SENSITIVE_FLOW_REQUIRE_OTP,
                ].indexOf(t.payload.eCode) >= 0;
              a && (a = y);
              const s = Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  lastData: Object(g.a)({}, e.lastData),
                  loginFail: !0,
                  security: a,
                }
              );
              return (
                t.payload &&
                  (s.lastData = Object(g.a)(
                    Object(g.a)({}, s.lastData),
                    t.payload
                  )),
                s
              );
            }
            case j:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { lastData: t.payload, loginFail: !0, security: !0 }
              );
            case P:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  lastData: Object(g.a)(
                    Object(g.a)({}, e.lastData),
                    {},
                    { questionData: t.payload }
                  ),
                }
              );
            case b:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  loginFail: !0,
                  errorMessage: t.payload,
                  security: !1,
                  lastData: null,
                }
              );
            case M:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { lastData: null, security: !1 }
              );
            case A:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  captchaImg:
                    "data:image/png;base64," + t.payload.data.data.captcha_img,
                  captchaToken: t.payload.data.data.token,
                }
              );
            case W:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  security: !1,
                  lastData: null,
                  loginFail: !1,
                  countryCode: 84,
                  errorMessage: "",
                }
              );
            case q:
              return pa;
            default:
              return e;
          }
        },
        common: (e = ma, t) => {
          var a;
          switch (t.type) {
            case k:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  visibleComponentName: "LOGIN_PASSWORD",
                  errorMessage:
                    void 0 !==
                    (null === (a = t.payload) || void 0 === a
                      ? void 0
                      : a.errorMessage)
                      ? t.payload.errorMessage
                      : e.errorMessage,
                  confirm: null,
                }
              );
            case M:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { visibleComponentName: "LOGIN_QR" }
              );
            case x: {
              const a = Object(g.a)(
                Object(g.a)({}, e),
                {},
                { visibleComponentName: "REGISTER" }
              );
              return (
                t.payload &&
                  (a.lastData = Object(g.a)(
                    Object(g.a)({}, e.lastData),
                    t.payload
                  )),
                a
              );
            }
            case it.PopupActions.TOGGLE_CONFIRM:
            case F:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { confirm: t.payload }
              );
            case K:
            case it.PopupActions.TOGGLE_APP_INFO:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { showAppInfo: !e.showAppInfo }
              );
            case it.PopupActions.TOGGLE_SETTING:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { showSetting: !e.showSetting }
              );
            case it.PopupActions.SHOW_APP_UPDATE_INFO:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { showAppUpdateInfo: t.payload }
              );
            case it.PopupActions.SHOW_APP_DOWNLOAD_UPDATE:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { showAppDownloadUpdate: t.payload }
              );
            case V:
              var s;
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                {
                  passingError:
                    (null === (s = t.payload) || void 0 === s
                      ? void 0
                      : s.error) || null,
                  visibleComponentName: "MOBILE_LOGIN",
                }
              );
            case v:
              return Object(g.a)(
                Object(g.a)({}, e),
                {},
                { visibleComponentName: "SECQ" }
              );
            default:
              return e;
          }
        },
      });
      var ga = Object(ua.createStore)(Ea),
        Ta = a("CzFt"),
        Na = a("YGiT");
      a("U96N"), Object(Na.a)();
      a("2ua2").default.init();
      s.default.checkSupport();
      const Ra = Object(r.connect)(
        function (e) {
          return { state: e };
        },
        function (e) {
          return {
            dispatch: (t) => {
              Object(Ta.c)(t), e(t);
            },
          };
        }
      )(da);
      Object(o.render)(
        i.a.createElement(
          r.Provider,
          { store: Ta.a, context: Ta.b },
          i.a.createElement(
            r.Provider,
            { store: ga },
            i.a.createElement(Ra, null)
          )
        ),
        document.getElementById("app")
      );
      a("TGaw");
      var fa = a("wH4e"),
        Sa = a("+eUS");
      Object(Sa.a)(fa.RunMode.Host);
    },
  },
]);
//# sourceMappingURL=../sourcemaps/lazy/login-startup.e41f4fb619084df0e9c1.js.map
