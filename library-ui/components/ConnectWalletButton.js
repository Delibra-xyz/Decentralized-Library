import React, { useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button, Text, Image } from '@chakra-ui/react'
import { useAuth } from '../context/AppContext'

const CustomButton = ({ children, bgGradient, color, ...props }) => {
  return (
    <Button
      backgroundColor="transparent"
      fontSize="18px"
      fontWeight="700"
      border="1px solid #FFFFFF"
      borderRadius="6px"
      filter="drop-shadow(0px 4px 32px rgba(255, 177, 189, 0.2))"
      _hover={{
        opacity: '0.3',
      }}
      _focus={{
        boxShadow: 'none',
      }}
      {...props}
    >
      <Text
        color={color}
        bgGradient={bgGradient}
        bgClip="text"
        display="flex"
        alignItems="center"
      >
        {children}
      </Text>
    </Button>
  )
}

function ConnectWalletButton({ bgGradient, ...props }) {
  return (
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
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { setConnected } = useAuth()

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')
            ? setConnected(true)
            : setConnected(false)
        }, [ready, chain, authenticationStatus, account, setConnected])

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <CustomButton
                    onClick={openConnectModal}
                    type="button"
                    bgGradient={bgGradient}
                    {...props}
                  >
                    Connect Wallet
                  </CustomButton>
                )
              }

              if (chain.unsupported) {
                return (
                  <CustomButton
                    onClick={openChainModal}
                    type="button"
                    bgGradient={bgGradient}
                    {...props}
                  >
                    Wrong network
                  </CustomButton>
                )
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <CustomButton
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                    bgGradient={bgGradient}
                    {...props}
                  >
                    {chain.hasIcon && (
                      <span
                        style={{
                          background: chain.iconBackground,
                          width: 20,
                          height: 20,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 20, height: 20 }}
                          />
                        )}
                      </span>
                    )}
                    {chain.name}
                  </CustomButton>

                  <CustomButton
                    onClick={openAccountModal}
                    type="button"
                    bgGradient={bgGradient}
                    {...props}
                  >
                    {account.displayName}
                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''} */}
                  </CustomButton>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default ConnectWalletButton
