const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  /* user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }, */
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  alias: {
    type: String
  },
  background: {
    type: String
  },
  essence: {
    type: Number
  },
  essenceUsed: {
    type: Number
  },
  /* mobility: {}, */
  qualities: {
    positives: [
      {
        type: Schema.Types.ObjectId,
        ref: "qualities"
      }
    ],
    negatives: [
      {
        type: Schema.Types.ObjectId,
        ref: "qualities"
      }
    ]
  },
  metatype: {
    type: {
      type: String
    },
    specialPoints: {
      type: Number
    },
    limitMod: {
      Body: {
        type: String
      },
      Agility: {
        type: String
      },
      Reaction: {
        type: String
      },
      Strength: {
        type: String
      },
      Willpower: {
        type: String
      },
      Logic: {
        type: String
      },
      Intuition: {
        type: String
      },
      Charisma: {
        type: String
      },
      Edge: {
        type: String
      }
    },
    attributesMod: {
      Body: {
        type: String
      },
      Agility: {
        type: String
      },
      Reaction: {
        type: String
      },
      Strength: {
        type: String
      },
      Willpower: {
        type: String
      },
      Logic: {
        type: String
      },
      Intuition: {
        type: String
      },
      Charisma: {
        type: String
      },
      Edge: {
        type: String
      }
    },
    racialQualities: {
      positives: [
        {
          type: Schema.Types.ObjectId,
          ref: "qualities"
        }
      ],
      negatives: [
        {
          type: Schema.Types.ObjectId,
          ref: "qualities"
        }
      ]
    },
    racialTraits: [
      {
        type: Schema.Types.ObjectId,
        ref: "qualities"
      }
    ]
  },
  powers: {
    powerType: {
      type: String
    },
    subType: {
      type: String
    },
    baseRank: {
      type: Number
    },
    numberOfSpells: {
      type: Number
    },
    numberOfComplexForm: {
      type: Number
    },
    numberOfFreeSkills: {
      type: Number
    },
    rankOfFreeSkills: {
      type: Number
    },
    spells: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "spells"
        },
        name: {
          type: String
        },
        description: {
          type: String
        }
      }
    ],
    complexForms: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "complexForms"
        },
        name: {
          type: String
        },
        description: {
          type: String
        }
      }
    ],
    adeptPowers: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "adeptPowers"
        },
        name: {
          type: String
        },
        description: {
          type: String
        }
      }
    ]
  },
  resources: {
    baseResources: {
      type: Number
    },
    currency: {
      type: String
    },
    karmaToResources: {
      type: Number
    },
    additionnalFunds: {
      type: Number
    }
  },
  skills: {
    numberOfSkillPoints: {
      type: Number
    },
    numberOfSkillGroupPoints: {
      type: Number
    },
    skillArray: [
      {
        skillId: {
          type: Schema.Types.ObjectId,
          ref: "skills"
        },
        skillName: "spellcasting",
        skillRating: 6,
        skillSpecs: ["Illusion"]
      }
    ]
  },
  attributes: {
    numberOfAttributePoints: {
      type: Number
    },
    numberOfRemiainingAttributes: {
      type: Number
    },
    attributeArray: {
      baseArray: {
        body: {
          type: Number
        },
        agility: {
          type: Number
        },
        reaction: {
          type: Number
        },
        strength: {
          type: Number
        },
        willpower: {
          type: Number
        },
        logic: {
          type: Number
        },
        intuition: {
          type: Number
        },
        charisma: {
          type: Number
        },
        edge: {
          type: Number
        },
        initiative: {
          type: String
        }
      },
      updatedArray: {
        body: {
          type: Number
        },
        agility: {
          type: Number
        },
        reaction: {
          type: Number
        },
        strength: {
          type: Number
        },
        willpower: {
          type: Number
        },
        logic: {
          type: Number
        },
        intuition: {
          type: Number
        },
        charisma: {
          type: Number
        },
        edge: {
          type: Number
        },
        initiative: {
          type: String
        }
      },
      augmentedArray: {
        body: {
          type: Number
        },
        agility: {
          type: Number
        },
        reaction: {
          type: Number
        },
        strength: {
          type: Number
        },
        willpower: {
          type: Number
        },
        logic: {
          type: Number
        },
        intuition: {
          type: Number
        },
        charisma: {
          type: Number
        },
        edge: {
          type: Number
        },
        initiative: {
          type: String
        }
      }
    }
  },
  augmentation: [
    {
      wareType: {
        type: String
      },
      wareGrade: {
        type: String
      },
      part: {
        type: String
      },
      deviceName: {
        type: String
      },
      rating: {
        type: Number
      },
      availability: {
        type: String
      },
      deviceRating: {
        type: Number
      },
      price: {
        type: Number
      },
      capacity: {
        type: Number
      },
      essencePrice: {
        type: Number
      }
    }
  ],
  gears: {
    deviceName: {
      type: String
    },
    deviceRating: {
      type: Number
    },
    rating: {
      type: Number
    },
    upgrades: [
      {
        name: {
          type: String
        },
        description: {
          type: String
        },
        part: {
          type: String
        },
        deviceRating: {
          type: Number
        },
        rating: {
          type: Number
        }
      }
    ],
    description: {
      type: String
    }
  },
  socials: {
    contactPoints: {
      type: Number
    },
    karmaToContacts: {
      type: Number
    },
    contactUsed: {
      type: Number
    },
    contacts: [
      {
        name: {
          type: String
        },
        profession: {
          type: String
        },
        servicesOffered: {
          type: String
        },
        connection: {
          type: Number
        },
        loyalty: {
          type: Number
        },
        socialMods: [
          {
            type: Schema.Types.ObjectId,
            ref: "socialMods"
          }
        ]
      }
    ],
    identity: {
      isRealSIN: {
        type: Boolean
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      FakeSinRating: {
        type: Number
      },
      licenses: [
        {
          name: {
            type: String
          },
          rating: {
            type: Number
          }
        }
      ],
      linkedCommlink: {
        type: String
      }
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Character = mongoose.model("characterSchema", CharacterSchema);
