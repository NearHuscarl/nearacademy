import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ads from '../components/Ads';
import { Line, SizedBox, Bold, FormattedText } from '../components/Common';
import { H3, H4 } from '../components/Headings';
import DocumentListSideBar from '../components/DocumentListSideBar';
import Tag, { TagGroup } from '../components/Tag';
import Button from '../components/Buttons';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import styled, { appColors } from '../styles';
import { sidebarDocuments, documentDetail } from '../data/documents';
import DocumentPreviewSection from '../components/DocumentPreviewSection';
import CommentSection from '../components/CommentSection';

const Content = styled.div`
	display: flex;
	margin-top: 3.6rem;
	margin-bottom: 7rem;
`;
const ColLeft = styled.div`
	max-width: 69rem;
	margin-right: 3.3rem;

	h3 {
		margin-top: 2rem;
	}
	h3 + div {
		margin-bottom: 2rem;
	}
	& > h3:last-of-type {
		margin-bottom: 1rem;
	}
`;
const ColRight = styled.div`
	flex: 0 1;
`;

const Paragraph = styled(FormattedText)`
	white-space: break-spaces;
`;

const Download = styled.div`
	display: flex;
	padding-left: 2.8rem;
	justify-content: space-between;
	align-items: center;

	& > div {
		color: ${appColors.blue};
	}
`;

const DocumentPreviewPage = () => {
	return (
		<main>
			<Breadcrumb path={[routes.home, routes.document, 'Bài tập Amin - Amino Axit - Peptit - Protein']} />
			<ContentContainer>
				<Content>
					<ColLeft>
						<DocumentPreviewSection document={documentDetail} />
						<SizedBox height={0.5} />
						<H3>Giới thiệu chung</H3>
						<Line />
						<Paragraph>{documentDetail.summary}</Paragraph>
						<H3>Trích dẫn từ tài liệu</H3>
						<Line />
						<Paragraph>{documentDetail.paper}</Paragraph>
						<H3>Liên kết tải tài liệu</H3>
						<Line />
						<H4>Liên kết tải tài liệu chính thức</H4>
						<Download>
							<div>
								11 đề tham khảo môn Văn chốt thi THPT Quốc gia 2019
							</div>
							<Button type='button'>
								<FontAwesomeIcon icon={faDownload} />
								<span>Tải tài liệu</span>
							</Button>
						</Download>
						<H4>Liên kết tải tài liệu dự phòng</H4>
						<Download>
							<div>
								11 đề tham khảo môn Văn chốt thi THPT Quốc gia 2019
							</div>
							<Button type='button'>
								<FontAwesomeIcon icon={faDownload} />
								<span>Tải tài liệu</span>
							</Button>
						</Download>
						<H3>Tìm thêm</H3>
						<Line />
						<TagGroup>
							{documentDetail.tags.map((t) => (
								<Bold>
									<Tag key={t}>{t}</Tag>
								</Bold>
							))}
						</TagGroup>
						<H3>Bình luận</H3>
						<CommentSection />
					</ColLeft>
					<ColRight>
						<DocumentListSideBar
							title='Tài liệu nổi bật'
							list={sidebarDocuments}
						/>
						<SizedBox height={1} />
						<DocumentListSideBar
							title='Tài liệu mới nhất'
							list={sidebarDocuments}
						/>
						<SizedBox height={1} />
						<DocumentListSideBar
							title='Có thể bạn quan tâm'
							list={sidebarDocuments}
						/>
						<SizedBox height={1} />
						<Ads />
					</ColRight>
				</Content>
			</ContentContainer>
		</main>
	);
};

export default DocumentPreviewPage;
