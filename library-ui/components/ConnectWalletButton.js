import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button, Text } from "@chakra-ui/react";

const CustomButton = ({children, ...props}) => {
    return(
        <Button
            backgroundColor="transparent"
            fontSize="18px"
            fontWeight="700"
            border= "1px solid #FFFFFF"
            borderRadius="6px"
            filter="drop-shadow(0px 4px 32px rgba(255, 177, 189, 0.2))"
            _hover={{
                opacity:"0.3"
            }}
            _focus={{
                boxShadow:"none"
            }}
            {...props}
        >
            <Text
                bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
                bgClip='text'
            >
                {children}
            </Text>
        </Button>
    )
}


function ConnectWalletButton() {
    return(
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                <div
                    {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                    },
                    })}
                >
                    {(() => {
                    if (!connected) {
                        return (
                        <CustomButton onClick={openConnectModal} type="button">
                            Connect Wallet
                        </CustomButton>
                        );
                    }

                    if (chain.unsupported) {
                        return (
                        <CustomButton onClick={openChainModal} type="button">
                            Wrong network
                        </CustomButton>
                        );
                    }

                    return (
                        <div style={{ display: 'flex', gap: 12 }}>
                        <CustomButton
                            onClick={openChainModal}
                            style={{ display: 'flex', alignItems: 'center' }}
                            type="button"
                        >
                            {chain.hasIcon && (
                            <div
                                style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                                }}
                            >
                                {chain.iconUrl && (
                                <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                />
                                )}
                            </div>
                            )}
                            {chain.name}
                        </CustomButton>

                        <CustomButton onClick={openAccountModal} type="button">
                            {account.displayName}
                            {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ''}
                        </CustomButton>
                        </div>
                    );
                    })()}
                </div>
                );
            }}
        </ConnectButton.Custom>
        
    )
}

export default ConnectWalletButton;


