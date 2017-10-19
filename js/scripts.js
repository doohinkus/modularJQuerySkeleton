$(document).ready(function (){
//people module
  (function (){
    var module = {
    //variables go here as attributes of module
      message: "Click here to change text.",
    //end variables
      init: function (){
        //streamlines dom usage
        this.cacheDOM();
        //deals with events
        this.bindEvents();
        //renders page
        this.render();
      },
      cacheDOM: function (){
        //highest level element in DOM
        this.$el = $("#template");
        //elements that will be manipulated
        this.$p = this.$el.find('p.changeMe');

      },
      //custom functions go here
      changeText: function (){
          this.message = "The text has changed!!!";
          this.render();
      },

      //always bind events to DOM elements
      bindEvents: function (){
      //Always bind events to each custom functions
        this.$p.on('click', this.changeText.bind(this));
      },
      render: function (){
        //update module state
        this.$p.empty().append(this.message);
      }
    }

    //call init for this module: triggers render
    module.init();

  })();

});
