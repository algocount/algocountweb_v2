const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../materials_md");
var materialList = [];

const getMaterials = () => {
	// fs.readdir(dirPath, (err, files) => {
	// 	if (err) {
	// 		console.log("we uagliù è successo un guaio, sta" + err);
	// 	}

	// 	files.forEach((file, i) => {
	// 		var obj = {};
	// 		var material;

	// 		fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
	// 			const getMetadataIndices = (acc, element, i) => {
	// 				if (/^---/.test(element)) {
	// 					acc.push(i);
	// 				}

	// 				return acc;
	// 			};

	// 			const parseMetadata = (lines, metadataIndices) => {
	// 				if (metadataIndices.length > 0) {
	// 					var metadata = lines.slice(
	// 						metadataIndices[0] + 1,
	// 						metadataIndices[1]
	// 					);

	// 					metadata.forEach((line) => {
	// 						obj[line.split(": ")[0]] = line.split(": ")[1];
	// 					});

	// 					return obj;
	// 				}
	// 			};

	// 			const parseContents = (lines, metadataIndices) => {
	// 				if (metadataIndices.length > 0) {
	// 					lines = lines.slice(metadataIndices[1] + 1, lines.length);
	// 				}
	// 				return lines.join("\n");
	// 			};

	// 			const lines = contents.split("\n");
	// 			// cerca su MDN Array.prototype.reduce()
	// 			const metadataIndices = lines.reduce(getMetadataIndices, []);
	// 			const metadata = parseMetadata(lines, metadataIndices);
	// 			const content = parseContents(lines, metadataIndices);

	// 			material = {
	// 				index: i + 1,
	// 				title: metadata.title ? metadata.title : "No title given",
	// 				description: metadata.description
	// 					? metadata.description
	// 					: "No description given",
	// 				imgUrl: metadata.imgUrl ? metadata.imgUrl : "No image url given",
	// 				resUrl: metadata.resUrl ? metadata.resUrl : "",
	// 				content: content ? content : "No content given",
	// 				type: metadata.type ? metadata.type : "No content given",
	// 				pageName: metadata.pageName ? metadata.pageName : "No content given",
	// 			};

	// 			materialList.push(material);

	// 			if (i === files.length - 1) {
	// 				const materialListSorted = materialList.sort(
	// 					(a, b) => a.index - b.index
	// 				);
	// 				var data = JSON.stringify(materialListSorted, null, 2);

	// 				fs.writeFileSync("src/materials.json", data);
	// 			}
	// 		});
	// 	});
	// });

	const files = fs.readdirSync(dirPath);
	files.forEach((fileName, i) => {
		var obj = {};
		var material;
		const contents = fs.readFileSync(dirPath + "/" + fileName, "utf8");
		// console.log(file)

		const getMetadataIndices = (acc, element, i) => {
			if (/^---/.test(element)) {
				acc.push(i);
			}

			return acc;
		};

		const parseMetadata = (lines, metadataIndices) => {
			if (metadataIndices.length > 0) {
				var metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);

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

		material = {
			index: i + 1,
			title: metadata.title ? metadata.title : "No title given",
			description: metadata.description
				? metadata.description
				: "",
			imgUrl: metadata.imgUrl ? metadata.imgUrl : "",
			imgUrl2: metadata.imgUrl2 ? metadata.imgUrl2 : "",
			imgDida: metadata.imgDida ? metadata.imgDida : "",
			resUrl: metadata.resUrl ? metadata.resUrl : "",
			file: metadata.file ? metadata.file : "",
			content: content ? content : "No content given",
			type: metadata.type ? metadata.type : "No content given",
			pageName: metadata.pageName ? metadata.pageName : "No content given",
		};

		materialList.push(material);
	});

	const materialListSorted = materialList.sort((a, b) => a.index - b.index);
	var data = JSON.stringify(materialListSorted, null, 2);
	fs.writeFileSync("src/materials.json", data);

  console. log (`we uagliù è successo che ho trovato e processato ${materialListSorted.length} file .md`)
};

getMaterials();
