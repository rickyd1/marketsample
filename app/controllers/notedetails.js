var args = arguments[0] || {};
console.log("title:" + args.title + ", location: " + args.location + ", note: " + args.note);
$.titleLabel.text = args.title;
$.locationLabel.text = args.location;
$.noteLabel.text = args.note;