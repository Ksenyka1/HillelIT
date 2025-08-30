function delayedLog(text, milliseconds) {

  setTimeout(() => {
    console.log(text); 
  }, milliseconds);
}
delayedLog("Hello", 2000);
