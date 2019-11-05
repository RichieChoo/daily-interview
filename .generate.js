const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const moment = require("moment");

const shortDate = moment().format("YYYY-MM-DD");
const date = moment().format("dddd, MMM Do YYYY");
const package = require("./package.json");
const theme = process.argv[3] || "index";
const jsComment = `
/**
 * @date {${date}}}
 * @author {${package.author}}
 */
\n`;
const mdComment = `<!-- ${date} -->\n`;
const files = { js: jsComment, md: mdComment };
const currentPath = path.join(process.cwd(), "days", shortDate);
if (fs.existsSync(currentPath)) {
    console.warn(`'${shortDate}' folder is already exists！Come on, my master~\(≧ ▽ ≦)/~`);
	process.exit();
}
mkdirp(currentPath, err => {
	if (!err) {
		Object.keys(files).forEach(item => {
			const itemPath = path.join(currentPath, `${theme}.${item}`);
			fs.writeFile(itemPath, files[item], err => {
				if (!err) {
					if (item === "md") {
						console.warn(
							`Hard work my master, keep studying for your future O(∩_∩)O~~`
						);
					}
				}
			});
		});
	}
});
