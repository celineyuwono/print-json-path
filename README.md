
### Find JSON Path of Children
Input an object only, and find all possible paths until last child and put it in an array.

Example Input:
```
const errorMessages = {
	"post-prov": {
			"service-control": {
				0: {
					target: ["Invalid input."],
					command: ["Invalid input."],
				},
			},
		},
	"pre-prov": {
		"service-control": {
			0: {
				target: ["Invalid input."],
				command: ["Invalid input."],
			},
			1: {
				target: ["Invalid input."],
			},
		},
	},
};
```

Example Result:
```
[
	"post-prov.service-control.0.target: Invalid input.",
	"post-prov.service-control.0.command: Invalid input.",
	"pre-prov.service-control.0.target: Invalid input.",
	"pre-prov.service-control.0.command: Invalid input.",
	"pre-prov.service-control.1.target: Invalid input."
 ]
```

Credits: https://stackoverflow.com/a/45645696