# XPromise
## Simple promisse implementation for Jurassic browser (Work in progress)

[Live example plnkr!](https://plnkr.co/edit/jQPehucGUefyI88L)

![nokia run](nokia-run-native-browser.jpg)

# Example
```javascript
var promise = new XPromise(function(resolve, reject) {
    resolve("XPromise resolve success");
    reject("XPromise rejected");
}).then(function(data) {
    alert(data);
}).error(function(err) {
    alert(err);
});

```
