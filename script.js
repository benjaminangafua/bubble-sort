
    <script>
        var arr = [3, 2, 8, 1, 9, 6, 4, 7, 5];
        console.log(arr)

        function bubbleSort(a) {
            var keepTrack = [];
            for (var i = 0; i < a.length; i++) {
                for (var j = i; j < a.length; j++) {
                    if (a[j] > a[j + 1]) {
                        keepTrack = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = keepTrack;
                        console.log("Swap: " + a[j] + " and " + a[j + 1])
                        console.log(a)
                    }
                }
            }
        }
        bubbleSort(arr)
    </script>
