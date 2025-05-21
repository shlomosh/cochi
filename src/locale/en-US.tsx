export const global = {
    appName: 'Vibe',
}

export const splashText = {
    readTermsAndConditions: (<>Read Terms & Conditions</>),
    acceptTermsAndLogin: (<>Accept Terms & Login</>),
}

export const termsAndConditionsPage = {
  acceptButton: (<>Accept</>),
  titleText: (<>Terms and Conditions</>),
  sectionsText: [
    {
      title: (<>1. Introduction</>),
      content: (<>
          <p>Welcome to {global.appName} ! By using our app, you agree to abide by these Terms and Conditions.
          If you do not agree, please refrain from using the service.</p>
        </>)
    },
    {
      title: (<>2. Eligibility</>),
      content: (<>
        <p>You must be at least 18 years old to use {global.appName}.
        By signing up, you confirm that all information you provide is accurate.</p>
      </>)
    },
    {
      title: (<>3. Respect Yourself and Respect Others</>),
      content: (<>
          <p>At {global.appName}, we believe in fostering a safe and respectful environment. Users must adhere to the following principles:</p>
          <p>
            <p className="ps-[1em] pt-1">• Respect others and treat all users with kindness and dignity. Hate speech, harassment, or discrimination will not be tolerated.</p>
            <p className="ps-[1em] pt-1">• Respect yourself and engage in positive interactions and practice self-care while using the platform.</p>
            <p className="ps-[1em] pt-1">• Always ensure all conversations and interactions are consensual.</p>
            <p className="ps-[1em] pt-1">• Reporting violations, if you experience or witness inappropriate behavior, please report it through the app's reporting system.</p>
          </p>
        </>)
    },
    {
      title: (<>4. User Conduct</>),
      content: (<>
        <p>Users must not:</p>
        <p>
          <p className="ps-[1em] pt-1">• Use {global.appName} for illegal activities.</p>
          <p className="ps-[1em] pt-1">• Share or distribute harmful, explicit, or deceptive content.</p>
          <p className="ps-[1em] pt-1">• Impersonate another person or create fake profiles.</p>
        </p>
      </>)
    },
    {
      title: (<>5. Privacy & Data Protection</>),
      content: (<>
        <p>Your personal data will be handled according to our privacy policy.</p>
        <p>We take reasonable security measures to protect your information, but we cannot guarantee absolute security.</p>
      </>)
    },
    {
      title: (<>6. Liability & Disclaimers</>),
      content: (<>
        <p>{global.appName} provides a platform for connection but is not responsible for user interactions outside the app.</p>
        <p>Users assume full responsibility for their communication and meet-ups.</p>
      </>)
    },
    {
      title: (<>7. Termination of Account</>),
      content: (<>
        <p>{global.appName} reserves the right to suspend or terminate accounts that violate our terms.</p>
      </>)
    },
    {
      title: (<>8. Changes to Terms</>),
      content: (<>
        <p>We may update these terms from time to time. Continued use of {global.appName} after updates implies acceptance of changes.</p>
      </>)
    },
  ],
};

export const profilePage = {
  selectButton: (<>Select</>),

  nickName: {
      label: 'Nick Name',
  },
  aboutMe: {
      label: 'About Me / #HashTags',
  },
  sexuality: {
      label: 'Sexuality',
      options: [
        '--',
        'Gay', 'Bisexual', 'Curious', 'Fluid',
      ]
  },
  age: {
      label: 'Age',
      options: [
          '--',
          ...Array.from({ length: 79 - 18 + 1 }, (_, i) => (
              `${18 + i}`
          )),
          '80+'
      ]
  },
  hostingStatus: {
      label: 'Hosting Status',
      options: [
        '--',
        'Host & Travel', 'Host Only', 'Travel Only'
      ]
  },
  travelDistance: {
      label: 'Travel Distance',
      options: [
        '--',
        '1 Km', '2 Km', '5 Km', '10 Km', '+20 Km'
      ]
  },
  position: {
      label: 'Position',
      options: [
        '--',
        'Bottom', 'Vers Bottom', 'Vers', 'Vers Top', 'Top', 'Side', 'Blower', 'Blowie'
      ],
  },
  bodyType: {
      label: 'Body Type',
      options: [
        '--',
        'Petite', 'Slim', 'Average', 'Fit', 'Muscular', 'Stocky', 'Chubby', 'Large'
      ]
  },
  endowment: {
      label: 'Endowment',
      options: [
        '--',
        'Small', 'Average', 'Large', 'Extra Large', 'Gigantic'
      ]
  },
  safety: {
      label: 'Practices',
      options: [
        '--',
        'Condoms', 'BB (PrEP)', 'Condoms or BB (PrEP)', 'No Penetrations'
      ]
  },
  when: {
      label: 'Looking for',
      options: [
        '--', 'Now', 'Today', 'Whenever'
      ]
  }
};