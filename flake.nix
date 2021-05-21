{
  description = "Grace Bobber's Personal Website";

  inputs = {
    unstable.url = "github:NixOS/nixpkgs/nixos-unstable";
    stable.url = "github:NixOS/nixpkgs/nixos-20.09";
  };

  outputs = inputs:
    let
      system = "x86_64-linux";
      pkgs = inputs.unstable.legacyPackages.${system};
    in {
      devShell."${system}" = pkgs.mkShell {
        buildInputs = [pkgs.hugo];
      };
    };
}
