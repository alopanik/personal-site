$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "cat alopanik.com<br/>" + 
      "><span class='caret'>%</span> job: solution architecture for emerging tech and analytics at <a href='http://www.workday.com/'>Workday</a><br/> ^100" +
      "><span class='caret'>%</span> learning: Master's student at Rutgers University<br/> ^300" +
      // "><span class='caret'>%</span> hobbies: I'm always looking for new projects (in 🐍) as I build my full stack skillset <br/>" +
      "><span class='caret'>%</span> about:  welcome to my personal Flask web app, hosted on AWS. I plan on hosting projects here that I'm working on from time to time.<br/>"

    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.002,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
