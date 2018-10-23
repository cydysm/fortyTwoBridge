var _console = console;
module.exports = {
  promptMethod: (type, action, result) => {
    const propmtContent = {
      type,
      action,
      result
    };
    _console.log(propmtContent);
    // const nativeResult = prompt(JSON.stringify(propmtContent));
    const nativeResult = JSON.stringify(propmtContent);
    return nativeResult;
  }
};