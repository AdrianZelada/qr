/**
 * Created by izel on 23-09-16.
 */
angular.module('starter.services').factory('eventsFactory',function () {
  var events=[
    {
      name:'Evento 1',
      dayEvent:1234367658,
      codeQr:12456
    },
    {
      name:'Evento 2',
      dayEvent:1234367658,
      codeQr:567445
    },
    {
      name:'Evento 3',
      dayEvent:1234333453,
      codeQr:163454
    },
    {
      name:'Evento 4',
      dayEvent:12343778555,
      codeQr:78964
    },
    {
      name:'Evento 5',
      dayEvent:12343664321,
      codeQr:343555
    },
    {
      name:'Evento 6',
      dayEvent:1234387222,
      codeQr:554324
    },
    {
      name:'Evento 7',
      dayEvent:123431111,
      codeQr:673241
    }
  ];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].codeQr === parseInt(chatId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
