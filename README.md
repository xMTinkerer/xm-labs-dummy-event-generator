# Dummy Event Generator
This is a utility for generating some random event data. This was built for dumping data into Splunk, but could be used for any application. 

<kbd>
  <img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</kbd>


# Pre-Requisites
* Existing communication plan - Use a packaged integration from the [integrations](https://xmatters.com/integrations) page, or [build your own](https://support.xmatters.com/hc/en-us/articles/202396229)
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)!


# Files
* [HipChat.js](HipChat.js) - This is the code for the Shared Library that abstracts the interactions with HipChat to a higher level.

# Installation
Details of the installation go here. 

## xMatters set up

1. Log in to your xMatters instance as a user with the Developer role (or anyone with access to the target communication plan). On the Developer tab, click Edit > Integration Builder for the target communication plan. 
2. Expand the Shared libraries section (if necessary) and click the + Add button
3. Update the name at the top from My Shared Library to `DataGenerator`, then paste in the contents of the Generator.js file and hit Save.

## Using the Generator
In a Integration Builder script, add all or some of the following code, depending on if you need corresponding active and terminated event pairs

```javascript

// Get the base event template
var activeEvent = getActiveEventBase();
var termEvent   = getTerminatedEventBase();

// Generate a "fake" GUID. 
var eventID     = generateBadGUID();

// Get some random event and recipient data
var eventData = getSampleEventData();
var recipData = getSampleRecipient();
var resolvedRecipData = getResolvedRecipients();

// Overwrite elements in Base Event
activeEvent = mergeRecursive( activeEvent, eventData );
activeEvent.event.recipients = recipData;
activeEvent.event.id = eventID;

// Ditto for terminated event
termEvent = mergeRecursive( termEvent, eventData );
termEvent.event.recipients.data = activeEvent.event.recipients.data.concat( resolvedRecipData );
termEvent.event.recipients.count = termEvent.event.recipients.data.length;
termEvent.event.recipients.total = termEvent.event.recipients.data.length;
termEvent.event.id = eventID;
```


# Testing
Testing will depend on what you are doing with the data and how the script is triggered. 


