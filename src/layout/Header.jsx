import React from 'react';
import Nav from '../components/Nav';
import Logo from '../components/Logo';
import profile from '../../public/images/profile.png';

function Header() {
	return (
		<header className='header'>
			<div className='header__top-bg'>
				<div className='header__top'>
					<div className='support'>
						Hotline: 1900-0000{' '}
						<span className='support support--time'>
							(Thời gian hỗ trợ từ 7h - 22h)
						</span>
					</div>
					<div className='profile'>
						<img
							src={profile}
							alt='profile avatar'
							className='profile__img'
						/>
						<span className='profile__name'>Xin chào, bé dủng</span>
						<i className='notification fas fa-bell' aria-hidden='true' />
					</div>
				</div>
			</div>
			<div className='header__main'>
				<Logo />
				<div className='header__search input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Nhập ID của câu hỏi cần xem đáp án và lời giải...'
						aria-label='Username'
						aria-describedby='basic-addon1'
					/>
					<div className='input-group-append'>
						<button className='btn btn--padding-sm' type='button'>
							<i className='fas fa-search' aria-hidden='true' />
						</button>
					</div>
				</div>
				<button type='button' className='btn-text'>
					<i className='fas fa-shopping-cart mr-tn' aria-hidden='true' />
					<span className='cart__text'>Các khóa học đã chọn</span>
				</button>
			</div>
			<Nav />
		</header>
	);
}

export default Header;