/*************** 
    CODE BOOLZAPP
***************/

const { createApp } = Vue

createApp({
    
    data() {
        return {
            nowTime: "",
            searchInput: "",
            notifications: false,
            newMsg: "",
            counter: 0,
            lastMsg: "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai fatto la spesa?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di metterla in frigo',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Fatto mamma',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'ei, come va?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Tutto bene, per stase?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Chiedo agli altri se ci sono',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Marianna va al mare',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Si scusa haha',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Andiamo alla nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, la chiamo dopo',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, novità con il nuovo ragazzo?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, nulla di nuovo',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Mh, fammi sapere dai..',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Marti',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Mi ero dimenticato, grazie ahha',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, stasera vado al cinema con Ale',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Va bene rimandiamo',
                            status: 'received'
                        }
                    ],

                }
            ]

        }
    },
    
    methods: {

        time(){
            let date = new Date().toLocaleTimeString();
            this.nowTime = date;
            //console.log(this.nowTime);
        },

        newCounter(i) {
            this.counter = i;
        },
        
        receiveMsg() {
            let newCpuText = {
                date: '10/01/2020 15:51:00',
                message: 'Va bene',
                status: 'received'
            };
            this.contacts[this.counter].messages.push(newCpuText);
            this.newAnswer = "";
        },
        
        sentMsg() {
            let newTxt = {
                date: '10/01/2020 15:51:00',
                message: this.newMsg,
                status: 'sent'
            };
            
            this.contacts[this.counter].messages.push(newTxt);
            this.newMsg = "";
            setTimeout(this.receiveMsg, 1000);
        },
        
        notOff() {
            this.notifications = !this.notifications;
        },
        
        userSearch() {
            for (let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].visible = true;
                if (!this.contacts[i].name.toLowerCase().includes(this.searchInput)) {
                    this.contacts[i].visible = false;
                }
            }
        },
        
        deleteMessage(index) {
            this.contacts[this.counter].messages.splice(index, 1);
        }
    },
    
    date() {
        let date = new Date().toLocaleTimeString();
            this.nowTime=date;
            //console.log(this.nowTime);
    }
}).mount('#app')