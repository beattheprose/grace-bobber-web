{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodePackages.gulp

    # keep this line if you use bash
    bashInteractive
  ];
}
