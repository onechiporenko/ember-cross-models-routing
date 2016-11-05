import DS from 'ember-data';
import Ember from 'ember';

const {RSVP, A} = Ember;

let users = {
  data: [
    {
      id: '1',

      type: 'user',
      attributes: {
        name: 'Thrall',
        race: 'Orc',
        locations: ['Grommash Hold', 'Orgrimmar'],
        affiliation: ['The Horde', 'Frostwolf clan', 'Orgrimmar'],
        classes: ['Far seer', 'Fighter', 'Healer', 'Shaman']
      },
      relationships: {
        game: {
          type: 'game', id: '1'
        }
      }
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        name: 'Khadgar',
        race: 'Human',
        locations: ['Shattrath City', 'Dalaran'],
        affiliation: ['Alliance', 'Kirin Tor'],
        classes: ['Archmage of Kirin Tor', 'Mage', 'Wizard']
      },
      relationships: {
        game: {
          type: 'game', id: '1'
        }
      }
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        name: 'Malfurion',
        race: '	Night elf',
        locations: ['Darnassus', 'Mount Hyjal'],
        affiliation: ['Sentinels', 'Druids', 'Alliance'],
        classes: ['Keeper of the grove', 'Healer', 'Scout']
      },
      relationships: {
        game: {
          type: 'game', id: '1'
        }
      }
    },
    {
      id: '4',
      type: 'user',
      attributes: {
        name: 'Zeratul',
        race: 'Protoss',
        locations: ['Aiur (R.I.P.)'],
        affiliation: ['Daelaam', 'Nerazim'],
        classes: ['Dark prelate']
      },
      relationships: {
        game: {
          type: 'game', id: '2'
        }
      }
    },
    {
      id: '5',
      type: 'user',
      attributes: {
        name: 'Sara Kerrigan',
        race: 'Terran, Primal zerg/terran hybrid, Xel\'naga',
        locations: ['Koprulu Sector', 'Anywhere'],
        affiliation: ['Kerrigan\'s Swarm'],
        classes: ['Last of the Xel\'naga']
      },
      relationships: {
        game: {
          type: 'game', id: '2'
        }
      }
    },
    {
      id: '6',
      type: 'user',
      attributes: {
        name: 'Jim Raynor',
        race: 'Terran',
        locations: ['Shiloh', 'Mar Sara'],
        affiliation: ['Sons of Korhal', 'Raynor\'s Rangers'],
        classes: ['Leader of Raynor\'s Raiders', 'Commander of the Hyperion']
      },
      relationships: {
        game: {
          type: 'game', id: '2'
        }
      }
    }
  ]
};

export default DS.JSONAPIAdapter.extend({

  findAll() {
    return new RSVP.Promise(resolve => resolve(users));
  },

  query(store, type, query) {
    return new RSVP.Promise(resolve => resolve({data: A(users.data).filterBy('relationships.game.id', query.game_id)}));
  },

  findRecord(store, type, id) {
    return new RSVP.Promise(resolve => resolve({data: A(users.data).findBy('id', id)}));
  }

});
