(function (window) {
    'use strict';

    var Robify,
        Scaler,
        Spinner,
        Flasher;

    // ===============================================================
    //  Robify Effects
    // ===============================================================

    // ---------------------------------------------------------------
    //  Scaler
    // ---------------------------------------------------------------
    Scaler = function (element) {
        this.element = element;
        this.go();
    };

    Scaler.prototype.go = function () {
        this.element.style.transition = "transform 200s";
        this.element.style.transform = "scale(10)";
    };

    Scaler.prototype.cancel = function () {
        this.element.style.transition = "transform 500ms cubic-bezier(0.48, -0.71, 0.27, 1.58)";
        this.element.style.transform = "";
    };


    Spinner = function (element) {
        this.element = element;
        this.go();
    };

    // ---------------------------------------------------------------
    //  Spinner
    // ---------------------------------------------------------------
    Spinner.prototype.go = function () {
        this.element.style.transition = "transform 100s";
        this.element.style.transform = "rotateZ(10000deg)";

        if (!this.element.style.position) {
            this.element.style.position = 'relative';
        }

        this.element.style.transformOrigin = 'center center';
    };

    Spinner.prototype.cancel = function () {
        this.element.style.transition = "transform 500ms cubic-bezier(0.48, -0.71, 0.27, 1.58)";
        this.element.style.transform = "";
    };

    // ---------------------------------------------------------------
    //  Flasher
    // ---------------------------------------------------------------
    Flasher = function (element, delay) {
        this.element = element;
        this.t = null;
        this.delay = delay || 200;
        this.go();
    };

    Flasher.prototype._toogle = function () {
        if (this.element.style.opacity && this.element.style.opacity === '1') {
            this.element.style.opacity = '0';
        } else {
            this.element.style.opacity = '1';
        }
    };

    Flasher.prototype.go = function () {
        this.t = setInterval(this._toogle.bind(this), this.delay);
    };

    Flasher.prototype.cancel = function () {
        if (this.t !== null) {
            clearInterval(this.t);
            this.t = null;
            this.element.style.opacity = '';
        }
    };

    // ===============================================================
    //  Main Namespace
    // ===============================================================

    /**
     * @param {DOMNode} element An element to make Awesome™
     */
    Robify = function (element) {
        return new Robify.robbers[Robify._randRobber()](element);
    };


    /**
     * @return {String} Random key from Robify.robbers
     */
    Robify._randRobber = function () {
        var keys = Object.keys(Robify.robbers),
            rand = Math.floor(Math.random() * keys.length);

        return keys[rand];
    };

    /**
     * [each description]
     * @param  {NodeList} NodeList
     * @return {Array}
     */
    Robify.each = function (NodeList) {
        var ret = [],
            i;

        for (i = 0; i < NodeList.length; i++) {
            ret.push(Robify(NodeList[i]));
        }

        return ret;
    };

    // Collect effects
    Robify.robbers = {};
    Robify.robbers.Scaler = Scaler;
    Robify.robbers.Spinner = Spinner;
    Robify.robbers.Flasher = Flasher;

    // ===============================================================
    //  Public API
    // ===============================================================

    window.Robify = Robify;
}(this));