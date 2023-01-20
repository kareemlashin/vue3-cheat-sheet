export const myMixin = {
    data() {
      return {
        title: 'Mixins are cool',
        copyright: 'All rights reserved. Product of super awesome people'
      };
    },

    methods: {
      greetings: function() {
        console.log('Howdy my good fellow!');
      }
    }
  };