/**
 * Created by suraj on 22/7/17.
 */

var botui = new BotUI('profile-bot');

botui.message
  .bot("Hi! I am Suraj Pai!").then( botui.message.bot({content:" I'd like to walk you through, well, me."}))
    .then(
    botui.message.bot({delay: 1000, content:"Can I know your name first?"})).then(
    function () {
      return botui.action.text({
        delay: 3000,
        action: {
          placeholder: 'Name'
        }
      })}).then(function (res1) {
      return res1
      }).then(function (res1) {

    botui.message.bot({delay: 1000, content:"Thanks,  "+ res1.value + "! Let me get started then, pick one of the options below to know more."})

}).then(function () {
    originFlow();
});

var showEducation = function () {
    botui.message.add({delay: 1000, content:' I am an Electronics and Communications Engineer with a Bachelor of Technology from Manipal Insitute of Technology.'}).then( botui.message.add({delay: 1500, content:' I graduated in 2016 with a CGPA of 8.43'})).then( botui.message.add({delay: 2000, content:' Some of my favorite subjects: Soft Computing, Information Theory, Sat Comms, etc.'}))

};

var showExperience = function () {
    botui.message.add({delay: 1000, content:' I have taken up multiple roles to gain perspective and experience.'}).then( botui.message.add({delay: 1500, content:'I currently work as an Associate Engineer at Cognitive Machines applying Image processing and Machine Learning to tackle real world problem sets.'})).then( botui.message.add({delay: 2000, content:' Previously, I was a Research Intern at MIT Practice School - Manipal; a Social Innovator at Digital Impact Square, Nashik; And a participant at the Stanford Crowd Course Initiative.'})).then(botui.message.add({delay:2500, content:"Check out my Resume to know more"}))


};
var showSkills = function () {
    botui.message.add({delay: 1000, content:"Some of my skill sets are: "}).then(botui.message.add({cssClass:"education", delay: 1500, content:"Image Processing"})).then(botui.message.add({cssClass:"education", delay: 1500, content:"Machine Learning"})).then(botui.message.add({cssClass:"education", delay: 1500, content:"NLP"})).then(botui.message.add({cssClass:"education", delay: 1500, content:"Backend Development"})).then(botui.message.add({cssClass:"education", delay: 1500, content:"Embedded Systems"})).then(botui.message.add({cssClass:"education", delay: 1500, content:"Chatbot Development"})).then(botui.message.add({cssClass:"education", delay: 1500, content:"Data Visualization"}));

};

var showGithub = function () {
    botui.message.add({delay: 1000, content:" Here is a link to my Github Folio!!"}).then(botui.message.add({delay: 1500, content:"[Suraj's GitHub](https://github.com/surajpaib)^"}))
};

var showProjects = function () {
  botui.message.add({delay: 1000, content:"I have worked on multiple projects for fun, work and Hackathons! Here is list of a few of them, Download my Resume to find out more"}).then(botui.message.add({delay: 1500, content:"Facebook Messenger Chatbots: Black Adam Bot: To recognize user recorded Music; First Aid Bot: To give out basic first aid best practices!"})).then(botui.message.add({delay: 2000, content:"Machine Learning Projects: Loan Defaulter Prediction, HackerEarth ML Challenges, SimPol: US Elections Candidate Predictor, QA bot for a Hotel Receptionist, Kaggle Competitions, Airplane Crash Data Visualization, k-NN based prognosis Identifier, Speaker Diaterization systems,etc."}))
};

var downloadResume = function(){
  botui.message.add({delay:1500, content:"[Suraj's Resume](surajpai.tech/resume)^"})
};

var originFlow = function () {
    botui.action.button({
      delay: 5000,
      action: [{
        text: 'Education',
        value: 'ed'
      }, {
        text: 'Experience',
        value: 'exp'
      },
      {
        text: 'Skills',
        value: 'sk'
      },
      {
        text: 'GitHub',
        value: 'gh'
      },
      {
        text: 'Projects',
        value: 'pt'
      },
       {
        text: 'Download Resume',
        value: 're'
      }]
    }).then(function (res) {
  if(res.value == 'ed') {
    showEducation();
          originFlow();

  } else if( res.value == 'exp') {
    showExperience();
          originFlow();

  }
  else if( res.value == 'sk') {
    showSkills();
          originFlow();

  }
  else if( res.value == 'gh') {
    showGithub();
          originFlow();

  }
  else if( res.value == 'pt') {
    showProjects();
          originFlow();

  }
  else if (res.value == 're'){
      downloadResume();
      originFlow();
  }
})
};

