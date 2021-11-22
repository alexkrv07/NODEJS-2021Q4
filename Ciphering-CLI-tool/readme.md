# Ciphering CLI Tool

## CLI tool that encodes and decodes a text by 3 substitution ciphers:
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)

CLI tool can accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

## Details:

1. The task **Ciphering CLI Tool** is solved using only **pure Node.js**.
2. `Config` option is required. In case of `Config` option is not passed - error will be printed in `stderr` with message `"Error! Config is required."` and the process will exit with status code **1**.
3. `Config` option is validated. In case of invalid confing error will be printed in `stderr` with message `"Error! Option: ${option} is not valid or doesn't exist."` and the process will exit with status code  **1**.
4. If any option is duplicated (i.e. `bash $ node my_ciphering_cli -c C1-C1-A-R0 -c C0`) - error will be printed in `stderr` with message `"Error! Option: **duplicated option** is not valid or doesn't exist."` and the process should exit with status code **1**.
5. If the input file option is missed - will be used `stdin` as an input source.
6. If the output file option is missed - will be used `stdout` as an output destination.
7. If the input and/or output file is given but doesn't exist or **CLI tool** can't access it (e.g. because of permissions or it's a directory) - error will be printed in `stderr` with message `"Error! Input/Output ${filename} doesn't exist or can't access it."` and the process will exit with status code **1**.
8. If passed params are fine the output (file or `stdout`) will contain transformed content of input (file or `stdin`).
9. For encoding/decoding **is used only the English alphabet**, all other characters will be kept untouched.
10. In **CLI tool** are used `streams` for reading, writing and transformation of text.
11. Each cipher is implemented in the form of a **transform stream**.
12. Streams are piped inside each other according to `config`.

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone this repository: `git clone git@github.com:alexkrv07/NODEJS-2021Q4.git`
3. Go to folder NODEJS-2021Q4: `cd NODEJS-2021Q4`
4. Checkout branch: `git checkout origin/Ciphering-CLI-tool`
4. Go to folder Ciphering-CLI-tool: `cd Ciphering-CLI-tool`.
5. Run program.
5. To exit, enter ```ctrl + c```.
6. **Usage example:**


```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node my_ciphering_cli -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `This is secret. Message about "_" symbol!`






---

© [Oleksii Korovushlin](https://github.com/alexkrv07)
