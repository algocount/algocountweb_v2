const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../events_md");
var eventList = [];

const getEvents = () => {
  fs.readdir(dirPath, (err, files) => {

    files.forEach((file, i) => {
      var obj = {};
      var eventItem;

      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, element, i) => {
          if (/^---/.test(element)) {
            acc.push(i);
          }

          return acc;
        };

        const parseMetadata = (lines, metadataIndices) => {
          if (metadataIndices.length > 0) {
            var metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );

            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });

            return obj;
          }
        };

        const parseContents = (lines, metadataIndices) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };

        const lines = contents.split("\n");
        // cerca su MDN Array.prototype.reduce()
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata(lines, metadataIndices);
        const content = parseContents(lines, metadataIndices);

        eventItem = {
          key: i + 1,
          date: metadata.date ? metadata.date : "No date given",
          title: metadata.title ? metadata.title : "No title given",
          description: metadata.description ? metadata.description : "No description given",
          imgUrl: metadata.imgUrl ? metadata.imgUrl : "No image url given",
          resUrl: metadata.resUrl ? metadata.resUrl : "",
          content: content ? content : "No content given",
          type:  metadata.type ? metadata.type : "No type given",
          pageName:  metadata.pageName ? metadata.pageName : "No content given",
          customUrl:  metadata.customUrl ? metadata.customUrl : undefined
        };

        eventList.push(eventItem);

        if (i === files.length - 1) {
          var data = JSON.stringify(eventList)
          fs.writeFileSync("src/events.json", data)
        }

      });
    });
  });
};

getEvents();
