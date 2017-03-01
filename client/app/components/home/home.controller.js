import * as flightUtils from './flightUtils';
import * as words from './words';

class HomeController {
    constructor($timeout) {
        var vm = this;
        vm.words = words.words;
        vm.currentWord = vm.words[0];

        vm.newWord = newWord;
        function newWord() {
            vm.currentWord = vm.words[Math.floor(Math.random() * vm.words.length)];
        }

        var countUp = function () {
            vm.currentWord = vm.words[Math.floor(Math.random() * vm.words.length)];
            $timeout(countUp, 50000);
        };
        $timeout(countUp, 50000);
    }
}

export default HomeController;
