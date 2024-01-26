export const goerli = {
    chainId: '5',
    name: 'Goerli',
    blockExplorerUrl: 'https://goerli.etherscan.io',
    rpcUrl: 'https://goerli.infura.io/v3/59b59e23bb7c44d799b5db4a1b83e4ee',
};

export const Pegasus = {
    chainId: '1891',
    name: 'Pegasus Testnet',
    blockExplorerUrl: 'https://pegasus.lightlink.io/',
    rpcUrl: 'https://replicator.pegasus.lightlink.io/rpc/v1',
};

export const CHAINS_CONFIG = {
    [goerli.chainId]: goerli,
    [Pegasus.chainId]: Pegasus,
};