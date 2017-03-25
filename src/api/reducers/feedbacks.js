import { fromJS } from 'immutable';

const initialState = fromJS({
  invites: {
    7762355623: {
      negatives: {
        123218377: {
          description: 'Precisa melhorar o o foco.'
        },
        123218378: {
          description: 'se imponha rapaz.'
        },
        123218379: {
          description: 'Se for pra começar meu filho, acabe o que fez.'
        }
      },
      positives: {
        23323333: {
          description: 'Dá pra manter a amizade no face.'
        }
      },
      feedback: {
        1239987666: {
          description: 'Preciso que vocês me avaliem.',
          surveyDate: new Date(),
          ratingDate: new Date(),
          owner: {
            photoUrl: '',
            email: 'mariana@gmail.com',
          },
          okrs: {
            23442344323: {
              label: 'Foco',
              description: 'Preciso melhorar e apagar meu facebook',
              feedbacks: {
                count: 0,
                123218381: {
                  rating: false,
                },
              }
            },
            23442344324: {
              label: 'Atitude',
              description: 'Me impor, sou muito acanhado',
              feedbacks: {
                count: 8,
                123218381: {
                  rating: true,
                }
              }
            },
            23442344325: {
              label: 'Resiliência',
              description: 'Aguentar pressão e terminar as coisas',
              feedbacks: {
                count: 10,
                123218381: {
                  rating: false,
                  negatives: {
                    123218377: {
                      description: 'Precisa melhorar o o foco.'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  feedbacks: {
    1239987365: {
      description: 'Preciso que vocês me avaliem.',
      surveyDate: new Date(),
      ratingDate: new Date(),
      owner: {
        photoUrl: '',
        email: 'cmilfont@gmail.com',
      },
      inviteds: {
        123218381: {
          name: 'Mariana',
          photoUrl: '',
          negatives: {
            123218382: {
              description: 'Precisa melhorar o o foco.'
            },
            123218383: {
              description: 'se imponha rapaz.'
            },
            123218384: {
              description: 'Se for pra começar meu filho, acabe o que fez.'
            }
          }
        }
      },
      okrs: {
        23442344323: {
          label: 'Foco',
          description: 'Preciso melhorar e apagar meu facebook',
          feedbacks: {
            123218381: {
              name: 'Mariana',
              photoUrl: '',
              negatives: {
                123218382: {
                  description: 'Precisa melhorar o o foco.'
                },
                123218384: {
                  description: 'Se for pra começar meu filho, acabe o que fez.'
                }
              }
            }
          }
        },
        23442344324: {
          label: 'Atitude',
          description: 'Me impor, sou muito acanhado',
          feedbacks: {
            123218381: {
              name: 'Mariana',
              photoUrl: '',
              negatives: {
                123218383: {
                  description: 'se imponha rapaz.'
                },
                123218384: {
                  description: 'Se for pra começar meu filho, acabe o que fez.'
                }
              }
            }
          }
        },
        23442344325: {
          label: 'Resiliência',
          description: 'Aguentar pressão e terminar as coisas',
          feedbacks: {
            123218381: {
              name: 'Mariana',
              photoUrl: '',
              negatives: {
                123218384: {
                  description: 'Se for pra começar meu filho, acabe o que fez.'
                }
              }
            }
          }
        }
      }
    },
    332444224: {
      description: 'Preciso que vocês me avaliem.',
      surveyDate: new Date(),
      ratingDate: new Date(),
      owner: {
        photoUrl: '',
        email: 'cmilfont@gmail.com',
      },
    },
  }
});

export default (state = initialState, action) => {

  return state;
}
