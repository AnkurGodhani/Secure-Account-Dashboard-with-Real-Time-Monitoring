import React from 'react'
import Footer from './Footer'

const TemsOFuse = () => {
  return (
    <div className='-mt-1'>
        <div className='About h-[200px] flex flex-col justify-center items-center font-bold gap-y-2 mb-10'>
            <h1 className='text-3xl text-white font-mono'>Terms and Conditions</h1>
            <p className='font-mono'>Home {"> "}<span className='text-yellow-400'>Terms and Conditions</span></p>
        </div>
        <div className='flex flex-col justify-center items-center p-10 gap-y-8'>
            <h1 className='text-4xl font-bold uppercase'>Terms and Conditions</h1>
            <span className='text-start text-red-500 font-semibold'>(1) ACCEPTANCE OF TERMS</span>
            <p className='items-center  w-[98%] text-md opacity-60 font-medium'>
               Last updated: December 05, 2017 Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the -code-projects.org/ website (the "Service") operated by Code Projects ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Terms and Conditions from TermsFeed for Code Projects. Links To Other Web Sites Our Service may contain links to third-party web sites or services that are not owned or controlled by Code Projects. Code Projects has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Code Projects shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit. Governing Law These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service. Changes We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service. Contact Us If you have any questions about these Terms, please contact us.
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default TemsOFuse