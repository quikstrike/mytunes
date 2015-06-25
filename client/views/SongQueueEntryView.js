// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  /*initialize: function(params){


    this.model.on('change:songQueue', function(model){
      //this.playerView.setSong(model.get('currentSong'));
      console.log("Heard the change")
      this.render();
    }, this);
  },
*/

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
