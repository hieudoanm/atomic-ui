'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2974],
  {
    2974: (e, s, l) => {
      l.r(s), l.d(s, { default: () => n });
      var t = l(6877);
      let a = Object.freeze(
          JSON.parse(
            '{"displayName":"Shell Session","fileTypes":["sh-session"],"name":"shellsession","patterns":[{"captures":{"1":{"name":"entity.other.prompt-prefix.shell-session"},"2":{"name":"punctuation.separator.prompt.shell-session"},"3":{"name":"source.shell","patterns":[{"include":"source.shell"}]}},"match":"^(?:((?:\\\\(\\\\S+\\\\)\\\\s*)?(?:sh\\\\S*?|\\\\w+\\\\S+[:@]\\\\S+(?:\\\\s+\\\\S+)?|\\\\[\\\\S+?[:@]\\\\N+?].*?))\\\\s*)?([#$%>❯➜\\\\p{Greek}])\\\\s+(.*)$"},{"match":"^.+$","name":"meta.output.shell-session"}],"scopeName":"text.shell-session","embeddedLangs":["shellscript"],"aliases":["console"]}'
          )
        ),
        n = [...t.default, a];
    },
  },
]);
