import { writeFileSync as create, unlinkSync as remove} from 'fs';

let input = process.argv;

if (input[2] == 'add') {
    create(input[3], input[4]);
} else if (input[2] == 'remove') {
    remove(input[3]);
} else {
    console.log('invalid input');
}