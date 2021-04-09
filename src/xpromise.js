function XPromise(promisseCallback) {
    var _this = this;
    _this.fnThen = function() {};
    _this.fnCatch = function() {};
    _this.ended = false;

    //wait assign callback functions
    setTimeout(function() {
        promisseCallback(_this.fnThen, _this.fnCatch);
    }, 1);

    return {
        then: function(cb) {
            _this.fnThen = function(data) {
                if (!_this.ended) {
                    cb(data);
                    _this.ended = true;
                }
            };
            return this;
        },
        error: function(cb) { //catch is reserved word
            _this.fnCatch = function(data) {
                if (!_this.ended) {
                    cb(data);
                    _this.ended = true;
                }
            };
        }
    };
};