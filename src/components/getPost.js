const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../md_files");
var postList = [];

const getPost = async () => {

  await fs.readdir(dirPath, (err, files) => {

    if (err) {
      return console.log("we uagliù è successo un guaio:\n" + err);
    }

    files.forEach((file, i) => {
        
      var obj = {};
      var post;

      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {

        const getMetadataIndices = (acc, element, i) => {

          if (/^---/.test(element)) {
            acc.push(i);
          }

          return acc;
        };

        const parseMetadata = (lines, metadataIndices) => {

            if (metadataIndices.length > 0) {
                var metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])

                metadata.forEach(line => {
                    obj[line.split(": ")[0]] = line.split(": ")[1];
                })
                
                return obj
            }

        } 

        const parseContents = (lines, metadataIndices) => {
            if (metadataIndices.length > 0) {
                lines = lines.slice(metadataIndices[1] + 1, lines.length)
            }
            return lines.join("\n")
        }

        const lines = contents.split("\n");
        // cerca su MDN Array.prototype.reduce()
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata(lines, metadataIndices);
        const content = parseContents(lines, metadataIndices); 

        post = {
            id: i + 1,
            title: metadata.title ? metadata.title : "No title given",
            author: metadata.author ? metadata.author : "No author given",
            date: metadata.date ? metadata.date : "No date given",
            content: content ? content : "No content given",
        }

        postList.push(post)

        console.log(postList)
      });
    });
  });
};

getPost();
