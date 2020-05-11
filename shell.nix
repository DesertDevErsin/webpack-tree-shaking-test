{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  shellHook = ''
    PATH=./node_modules/.bin:$PATH
  '';
  buildInputs = [
    nodejs-12_x
    nodePackages.yarn
  ];
}
