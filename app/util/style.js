const { htmlSafe } = Ember.String;

export default {

  styleString(attrs) {
    const attrStrings = Object.keys(attrs).map(key=>{
      return `${key}:${attrs[key]}`;
    });
    return htmlSafe(attrStrings.join(';'));
  }

}