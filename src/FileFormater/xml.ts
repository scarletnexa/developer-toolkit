export function JSON_TO_XML(json: any, parent_class: string = 'root'){
    const start = '<?xml version="1.0" encoding="UTF-8"?>\n';
    const convert = (json: any, parent = '') => {
        let xml = '';
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                const element = json[key];
                const tag = parent ? parent + '.' + key : key;
                if (typeof element === 'object') {
                    xml += convert(element, tag);
                } else {
                    xml += `<${tag}>${element}</${tag}>\n`;
                }
            }
        }
        return xml;
    };
    return start + `<${parent_class}>\n` + convert(json) + `</${parent_class}>`;
};

