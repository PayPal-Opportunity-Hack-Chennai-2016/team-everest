import { Meteor } from 'meteor/meteor';
import { Items } from '../collection/items';
 
Meteor.startup(() => {
  if (Items.find().count() === 0) {
    const parties = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Savage lounging',
      'description': 'Leisure suit required. And only fiercest manners.'
    }];
 
    parties.forEach((party) => {
      Items.insert(party)
    });
  }
});