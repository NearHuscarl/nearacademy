/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../components/Logo';
import {
	FacebookButton,
	YoutubeButton,
	TwitterButton,
} from '../components/Buttons';
import { H4 } from '../components/Headings';
import googlePlay from '../../public/images/google-play.png';
import appStore from '../../public/images/app-store.png';
import styled, { appColors, theme, mixins } from '../styles';
import routes from '../routes';
import { Link } from '../components/Common';

const FooterTop = styled.div`
	margin: 0 auto;
	padding: 4.8rem calc(((100vw - ${theme.pageContainerWidth}) / 2));
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	row-gap: 1.5rem;

	background-color: ${appColors.greyLight1};

	h4 {
		margin-bottom: 1rem;
	}

	li:not(:last-child) {
		margin-bottom: 0.75rem;
	}
`;

const TopLogo = styled(Logo)`
	grid-column: 1 / -1;
`;
const TopLink = styled(Link)`
	font-size: inherit;
	font-weight: normal;
	transition: all 0.2s;
	${mixins.underlineExpandAnimation('0.2s')}

	&:hover,
	&:focus {
		outline: none;
		color: ${appColors.primary};
		/* override bs hover */
		text-decoration: none;
	}

	&:active {
		transform: translateY(0.1rem);
	}

	/* fix ButtonLink underline span 100% block width */
	display: inline-flex;
	justify-content: center;
	color: ${theme.fontColor};
`;
const TopAppImage = styled.img`
	width: 20rem;
	transition: box-shadow 0.2s, transform 0.2s;

	&:hover {
		box-shadow: ${theme.shadowLight};
		${mixins.applyScale('transform: scale(1.048);')}
	}
`;

const FooterBottom = styled.div`
	padding: 4rem;
	background-color: ${appColors.darkBlue};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const BottomMedias = styled.div`
	display: grid;
	grid-template-columns: repeat(3, min-content);
	justify-content: center;
	gap: 1rem;

	width: 100%;
	margin-bottom: 1.9rem;
`;
const BottomCopyright = styled.div`
	font-size: 1rem;
	margin-bottom: 0.9rem;
`;
const BottomLicense = styled.div`
	line-height: 1.2;
	font-size: 0.8rem;
	width: 55rem;
`;
export default function Footer() {
	const { about, teacher, exercise, exam, document, question } = routes;

	return (
		<footer>
			<FooterTop>
				<TopLogo />
				<div>
					<H4>About</H4>
					<ul>
						<li>
							<TopLink to={about.path}>Introduction</TopLink>
						</li>
						<li>
							<TopLink to={teacher.path}>Famous teachers</TopLink>
						</li>
						<li>
							<TopLink>Terms of service</TopLink>
						</li>
						<li>
							<TopLink>Regulation</TopLink>
						</li>
						<li>
							<TopLink>Privacy policy</TopLink>
						</li>
						<li>
							<TopLink>Careers</TopLink>
						</li>
					</ul>
				</div>
				<div>
					<H4>Service</H4>
					<ul>
						<li>
							<TopLink to={exercise.path}>Exercise storage</TopLink>
						</li>
						<li>
							<TopLink to={exam.path}>Exam storage</TopLink>
						</li>
						<li>
							<TopLink to={document.path}>Document storage</TopLink>
						</li>
						<li>
							<TopLink to={question.path}>Forum</TopLink>
						</li>
					</ul>
				</div>
				<div>
					<div className='mb-md'>
						<H4>Contact</H4>
						<H4>Customer</H4>
						<ul>
							<li>
								<span className='bold'>Email: </span>
								<TopLink
									as='a'
									href='mailto:near.huscarl@gmail.com'
									rel='noreferrer noopener'
								>
									support@nearacademy.vn
								</TopLink>
							</li>
							<li>
								<span className='bold'>Hotline: </span>
								<TopLink
									as='a'
									href='tel:1900-0000'
									rel='noreferrer noopener'
								>
									1900-0000
								</TopLink>
							</li>
						</ul>
					</div>
					<div>
						<H4>Client</H4>
						<ul>
							<li>
								<span className='bold'>Email: </span>
								<TopLink
									as='a'
									href='mailto:near.huscarl@gmail.com'
									rel='noreferrer noopener'
								>
									info@nearacademy.vn
								</TopLink>
							</li>
							<li>
								<span className='bold'>Tel: </span>
								<TopLink
									as='a'
									href='tel:+84 (00) 0000-0000'
									rel='noreferrer noopener'
								>
									+84 (00) 0000-0000
								</TopLink>
							</li>
							<li>
								<span className='bold'>Fax: </span>
								<TopLink as='a' href='#' rel='noreferrer noopener'>
									+84 (00) 0000-0000
								</TopLink>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<H4>Download NearAcademy app</H4>
					<a href='#'>
						<TopAppImage
							className='mb-sm'
							src={googlePlay}
							alt='google play'
						/>
					</a>
					<a href='#'>
						<TopAppImage src={appStore} alt='app store' />
					</a>
				</div>
			</FooterTop>
			<FooterBottom>
				<BottomMedias>
					<FacebookButton />
					<YoutubeButton />
					<TwitterButton />
				</BottomMedias>
				<BottomCopyright>
					© 2019 - All right reserved to NearAcademy
				</BottomCopyright>
				<BottomLicense>
					Built by NearHuscarl for his HCI college project. Copyright © by
					NearHuscarl. You are 100% allowed to use this webpage for both
					personal and commercial use, but NOT to claim it as your own
					design. A credit to the original author, NearHuscarl, is of
					course highly appreciated!
				</BottomLicense>
			</FooterBottom>
		</footer>
	);
}
