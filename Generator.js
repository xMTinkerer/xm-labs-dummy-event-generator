/**
 * Event Generator!
 *   This utility will generate some random event data
 *
 * Example usage:
 *

var Generator = require( 'Generator' );

// Get the base event template
var activeEvent = Generator.getActiveEventBase();
var termEvent   = Generator.getTerminatedEventBase();

// Generate a "fake" GUID. 
var eventID     = Generator.generateBadGUID();

// Get some random event and recipient data
var eventData = Generator.getSampleEventData();
var recipData = Generator.getSampleRecipient();
var resolvedRecipData = Generator.getResolvedRecipients();

// Overwrite elements in Base Event
activeEvent = Generator.mergeRecursive( activeEvent, eventData );
activeEvent.recipients = recipData;
activeEvent.id = eventID;

// Ditto for terminated event
termEvent = Generator.mergeRecursive( termEvent, eventData );
termEvent.recipients.data = activeEvent.recipients.data.concat( resolvedRecipData );
termEvent.recipients.count = termEvent.recipients.data.length;
termEvent.recipients.total = termEvent.recipients.data.length;
termEvent.id = eventID;


 */

// Sample event data to override the in the template
exports.getSampleEventData = function() {
    var eventData = [{
            "event": {
                "form": {
                    "name": "New Monitoring Event"
                },
                "name": "New Monitoring Event notification",
                "properties": {
                    "severity#en": "ERROR",
                    "application#en": "ACME App"
                }

            }
        },
        {
            "event": {
                "form": {
                    "name": "New App Performance Event"
                },
                "name": "New App Performance Event notification",
                "properties": {
                    "severity#en": "ERROR",
                    "application#en": "ACME App"
                }

            }
        },
        {
            "event": {
                "form": {
                    "name": "Major Incident"
                },
                "name": "Major Incident notification",
                "properties": {
                    "severity#en": "HIGH",
                    "priority#en": "HIGH",
                    "cmdb_item#en": "company.com website"
                }

            }
        },
        {
            "event": {
                "form": {
                    "name": "Log Event"
                },
                "name": "Log Event notification",
                "properties": {
                    "data#en": "SocketException in /var/log/myapplication.log",
                    "priority#en": "HIGH",
                    "search#en": "SocketException"
                }

            }
        }
    ];

    var idx = getRandomInt(eventData.length);
    return eventData[idx];
}





exports.getSampleRecipient = function() {
    var recipients = [{
            "count": 1,
            "data": [{
                "allowDuplicates": true,
                "description": "Major Incident Manager",
                "externallyOwned": false,
                "id": "f988d2e5-801c-4ce0-b817-59e54187daa9",
                "links": {
                    "self": "/api/xm/1/groups/f988d2e5-801c-4ce0-b817-59e54187daa9"
                },
                "observedByAll": true,
                "recipientType": "GROUP",
                "status": "ACTIVE",
                "targetName": "MIM Team",
                "targeted": true,
                "useDefaultDevices": true
            }],
            "links": {
                "self": "/api/xm/1/events/fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d/recipients?targeted=true&offset=0&limit=100"
            },
            "total": 1
        },
        {
            "count": 1,
            "data": [{
                "allowDuplicates": true,
                "description": "DevOps team Red Alpha",
                "externallyOwned": false,
                "id": "f988d2e5-801c-4ce0-b817-59e54187daa9",
                "links": {
                    "self": "/api/xm/1/groups/f988d2e5-801c-4ce0-b817-59e54187daa9"
                },
                "observedByAll": true,
                "recipientType": "GROUP",
                "status": "ACTIVE",
                "targetName": "Red Alpha",
                "targeted": true,
                "useDefaultDevices": true
            }],
            "links": {
                "self": "/api/xm/1/events/fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d/recipients?targeted=true&offset=0&limit=100"
            },
            "total": 1
        },
        {
            "count": 1,
            "data": [{
                "allowDuplicates": true,
                "description": "ACME App support group",
                "externallyOwned": false,
                "id": "f988d2e5-801c-4ce0-b817-59e54187daa9",
                "links": {
                    "self": "/api/xm/1/groups/f988d2e5-801c-4ce0-b817-59e54187daa9"
                },
                "observedByAll": true,
                "recipientType": "GROUP",
                "status": "ACTIVE",
                "targetName": "ACME Group",
                "targeted": true,
                "useDefaultDevices": true
            }],
            "links": {
                "self": "/api/xm/1/events/fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d/recipients?targeted=true&offset=0&limit=100"
            },
            "total": 1
        },
        {
            "count": 1,
            "data": [{
                "allowDuplicates": true,
                "description": "Major Incident Manager",
                "externallyOwned": false,
                "id": "f988d2e5-801c-4ce0-b817-59e54187daa9",
                "links": {
                    "self": "/api/xm/1/groups/f988d2e5-801c-4ce0-b817-59e54187daa9"
                },
                "observedByAll": true,
                "recipientType": "GROUP",
                "status": "ACTIVE",
                "targetName": "MIM Team",
                "targeted": true,
                "useDefaultDevices": true
            }],
            "links": {
                "self": "/api/xm/1/events/fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d/recipients?targeted=true&offset=0&limit=100"
            },
            "total": 1
        }

    ];

    var idx = getRandomInt(recipients.length);
    return recipients[idx];
}





exports.getActiveEventBase = function() {
    return {
            "bypassPhoneIntro": false,
            "created": "2018-04-27T18:21:49.921+0000",
            "escalationOverride": false,
            "eventId": "1003325000",
            "eventType": "USER",
            "expirationInMinutes": 180,
            "floodControl": false,
            "form": {
                "id": "85c9c5b0-edbf-43c0-8093-fc72421d9fef",
                "name": "New Monitoring Event"
            },
            "id": "fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d",
            "incident": "INCIDENT_ID-1003325000",
            "integration": {
                "id": "3e989716-581e-46c1-92ee-1a8f0d5cfc6c"
            },
            "links": {
                "self": "/api/xm/1/events/fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d"
            },
            "name": "New Event Notification",
            "notificationAuditCount": 6,
            "overrideDeviceRestrictions": false,
            "priority": "MEDIUM",
            "properties": {
                "action_trigger_time#en": "Fri Apr 27 11:21:43 PDT 2018",
                "severity#en": "ERROR"
            },
            "recipients": {
                "count": 1,
                "data": [{
                    "allowDuplicates": true,
                    "description": "A good group",
                    "externallyOwned": false,
                    "id": "f988d2e5-801c-4ce0-b817-59e54187daa9",
                    "links": {
                        "self": "/api/xm/1/groups/f988d2e5-801c-4ce0-b817-59e54187daa9"
                    },
                    "observedByAll": true,
                    "recipientType": "GROUP",
                    "status": "ACTIVE",
                    "targetName": "Dynamic Performance Team",
                    "targeted": true,
                    "useDefaultDevices": true
                }],
                "links": {
                    "self": "/api/xm/1/events/fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d/recipients?targeted=true&offset=0&limit=100"
                },
                "total": 1
            },
            "requestId": "db997a13-2108-4533-8705-84ced584c7f2",
            "requirePhonePassword": false,
            "responseCountsEnabled": false,
            "responseOptions": {
                "count": 4,
                "data": [{
                        "action": "ASSIGN_TO_USER",
                        "allowComments": true,
                        "contribution": "POSITIVE",
                        "description": "Acknowledge",
                        "id": "e62588e3-b30c-48e7-a3d0-07fcb940709f",
                        "joinConference": false,
                        "number": 1,
                        "prompt": "Acknowledge",
                        "text": "Acknowledge"
                    },
                    {
                        "action": "ESCALATE",
                        "allowComments": true,
                        "contribution": "NEGATIVE",
                        "description": "Escalate",
                        "id": "04574c8f-02ba-4287-b66a-e4b8f636e40f",
                        "joinConference": false,
                        "number": 2,
                        "prompt": "Escalate",
                        "text": "Escalate"
                    },
                    {
                        "action": "ASSIGN_TO_USER",
                        "allowComments": true,
                        "contribution": "POSITIVE",
                        "description": "Acknowledge and Create P2 Incident",
                        "id": "557a91d8-cc00-4a5b-977e-d9793e0e0cda",
                        "joinConference": false,
                        "number": 3,
                        "prompt": "Create a P 2 Incident",
                        "redirectUrl": "",
                        "text": "Create New Incident"
                    }
                ],
                "total": 4
            },
            "senderOverrides": {
                "displayName": "xMatters"
            },
            "status": "ACTIVE",
            "submitter": {
                "firstName": "User",
                "id": "3f5a0e6f-82a9-4c2c-83ba-d859b9a4d35e",
                "lastName": "Demo",
                "links": {
                    "self": "/api/xm/1/people/3f5a0e6f-82a9-4c2c-83ba-d859b9a4d35e"
                },
                "recipientType": "PERSON",
                "targetName": "demouser"
            },
            "voicemailOptions": {
                "every": 60,
                "leave": "callbackonly",
                "retry": 0
            }
        }
}





exports.getResolvedRecipients = function() {

	var recipients = [
    {
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "John",
        "id": "822ead68-38ad-48e7-a97f-6e8afffd2f0a",
        "language": "en",
        "lastName": "Smith",
        "links": {
            "self": "/api/xm/1/people/822ead68-38ad-48e7-a97f-6e8afffd2f0a"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "jsmith",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "jsmith"
    }, {
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Tom",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Smythe",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "tsmythe",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "tsmythe"
    },{
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Tony",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Welke",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "twelke",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "twelke"
    },{
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Vernon",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Cooper",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "vcooper",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "vcooper"
    },{
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Roberta",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Garcia",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "rgarcia",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "rgarcia"
    },{
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Will",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Patterson",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "wpatterson",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "wpatterson"
    },{
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Terry",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Martinez",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "tmartinez",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "tmartinez"
    },{
        "deliveryStatus": "DELIVERED",
        "externallyOwned": false,
        "firstName": "Heidi",
        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
        "language": "en",
        "lastName": "Molino",
        "links": {
            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
        },
        "recipientType": "PERSON",
        "site": {
            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
            "links": {
                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
            },
            "name": "Default Site"
        },
        "status": "ACTIVE",
        "targetName": "hmolino",
        "targeted": false,
        "timezone": "US/Eastern",
        "webLogin": "hmolino"
    }

    ];


    var num = getRandomInt( recipients.length );

    return recipients.slice( 0, num );


}



exports.getTerminatedEventBase = function() {
    return {
            "annotations": {
                "count": 0,
                "data": [],
                "links": {
                    "self": "/api/xm/1/events/7f9c901b-7215-48b5-820f-89879f77a7ba/annotations?offset=0&limit=100"
                },
                "total": 0
            },
            "bypassPhoneIntro": false,
            "created": "2018-04-27T18:43:35.301+0000",
            "escalationOverride": false,
            "eventId": "1003379000",
            "eventType": "USER",
            "expirationInMinutes": 180,
            "floodControl": false,
            "form": {
                "id": "85c9c5b0-edbf-43c0-8093-fc72421d9fef",
                "name": "New Monitoring Event"
            },
            "id": "fcbbefb3-2cc6-4fe8-8cd1-b45c03d92a9d",
            "incident": "INCIDENT_ID-1003379000",
            "integration": {
                "id": "40009abe-92e4-41ee-a3be-1ffa9ab2981c"
            },
            "links": {
                "self": "/api/xm/1/events/7f9c901b-7215-48b5-820f-89879f77a7ba"
            },
            "name": "New Event Notification",
            "notificationAuditCount": 25,
            "overrideDeviceRestrictions": false,
            "priority": "MEDIUM",
            "properties": {
                "action_trigger_time#en": "Fri Apr 27 11:21:43 PDT 2018",
                "severity#en": "ERROR"
            },
            "recipients": {
                "count": 3,
                "data": [{
                        "allowDuplicates": true,
                        "description": "ACME App support group",
                        "externallyOwned": false,
                        "id": "f988d2e5-801c-4ce0-b817-59e54187daa9",
                        "links": {
                            "self": "/api/xm/1/groups/f988d2e5-801c-4ce0-b817-59e54187daa9"
                        },
                        "observedByAll": true,
                        "recipientType": "GROUP",
                        "status": "ACTIVE",
                        "targetName": "ACME Group",
                        "targeted": true,
                        "useDefaultDevices": true
                    },
                    {
                        "deliveryStatus": "DELIVERED",
                        "externallyOwned": false,
                        "firstName": "John",
                        "id": "822ead68-38ad-48e7-a97f-6e8afffd2f0a",
                        "language": "en",
                        "lastName": "Smith",
                        "links": {
                            "self": "/api/xm/1/people/822ead68-38ad-48e7-a97f-6e8afffd2f0a"
                        },
                        "recipientType": "PERSON",
                        "site": {
                            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
                            "links": {
                                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
                            },
                            "name": "Default Site"
                        },
                        "status": "ACTIVE",
                        "targetName": "jsmith",
                        "targeted": false,
                        "timezone": "US/Eastern",
                        "webLogin": "jsmith"
                    },
                    {
                        "deliveryStatus": "DELIVERED",
                        "externallyOwned": false,
                        "firstName": "Tom",
                        "id": "d71e5784-2fb3-4e98-b540-9e315b18fb7b",
                        "language": "en",
                        "lastName": "Smythe",
                        "links": {
                            "self": "/api/xm/1/people/d71e5784-2fb3-4e98-b540-9e315b18fb7b"
                        },
                        "recipientType": "PERSON",
                        "site": {
                            "id": "81bb57a9-f052-417a-a242-1c1c7cad61f7",
                            "links": {
                                "self": "/api/xm/1/sites/81bb57a9-f052-417a-a242-1c1c7cad61f7"
                            },
                            "name": "Default Site"
                        },
                        "status": "ACTIVE",
                        "targetName": "tsmythe",
                        "targeted": false,
                        "timezone": "US/Eastern",
                        "webLogin": "tsmythe"
                    }

                ],
                "links": {
                    "self": "/api/xm/1/events/7f9c901b-7215-48b5-820f-89879f77a7ba/recipients?offset=0&limit=100"
                },
                "total": 3
            },
            "requestId": "db997a13-2108-4533-8705-84ced584c7f2",
            "requirePhonePassword": false,
            "responseCountsEnabled": false,
            "responseOptions": {
                "count": 3,
                "data": [{
                        "action": "ASSIGN_TO_USER",
                        "allowComments": true,
                        "contribution": "POSITIVE",
                        "description": "Acknowledge",
                        "id": "a5e905e8-c659-41d4-9942-b864c350a2e5",
                        "joinConference": false,
                        "number": 1,
                        "prompt": "Acknowledge",
                        "text": "Acknowledge"
                    },
                    {
                        "action": "ESCALATE",
                        "allowComments": true,
                        "contribution": "NEGATIVE",
                        "description": "Escalate",
                        "id": "217a5956-8260-4b40-9a96-4c1c5af5b469",
                        "joinConference": false,
                        "number": 2,
                        "prompt": "Escalate",
                        "text": "Escalate"
                    },
                    {
                        "action": "ASSIGN_TO_USER",
                        "allowComments": true,
                        "contribution": "POSITIVE",
                        "description": "Create a P1 ServiceNow Incident",
                        "id": "9b87696f-3e69-433f-8b14-5108dd62f382",
                        "joinConference": false,
                        "number": 3,
                        "prompt": "Create P2 Incident",
                        "redirectUrl": "",
                        "text": "Create SNOW Incident"
                    }
                ],
                "total": 3
            },
            "status": "TERMINATED",
            "submitter": {
                "firstName": "Funny Hat",
                "id": "3f5a0e6f-82a9-4c2c-83ba-d859b9a4d35e",
                "lastName": "Buckethead",
                "links": {
                    "self": "/api/xm/1/people/3f5a0e6f-82a9-4c2c-83ba-d859b9a4d35e"
                },
                "recipientType": "PERSON",
                "targetName": "buckethead"
            },
            "terminated": "2018-04-27T18:49:35.831+0000",
            "voicemailOptions": {
                "every": 60,
                "leave": "callbackonly",
                "retry": 0
            }
        };
}



exports.generateBadGUID = function() {
	// 3f5a0e6f-82a9-4c2c-83ba-d859b9a4d35e
	// Do not try this at home kids
	var guid = [];

	var alpha = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
	for (var i = 0; i < 36; i++) {
		if( i==7 || i==13 || i==18 || i==23 ) {
			guid.push( '-' );
		}
		else {
			if( getRandomInt( 100 ) % 2 == 0 ) {
				guid.push( getRandomInt(9 ) );
			}
			else
				guid.push( alpha[ getRandomInt( alpha.length ) ] );
		}
	}

	return guid.join( '' );

}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}




exports.mergeRecursive = function(obj1, obj2) {
    /// https://stackoverflow.com/a/383245/3143112

    var obj = JSON.parse(JSON.stringify(obj1));
    for (var p in obj2) {
        try {
            // Property in destination object set; update its value.
            if (obj2[p].constructor == Object) {
                obj[p] = mergeRecursive(obj[p], obj2[p]);

            } else {
                obj[p] = obj2[p];

            }

        } catch (e) {
            // Property in destination object not set; create it and set its value.
            obj[p] = obj2[p];

        }
    }

    return obj;
}