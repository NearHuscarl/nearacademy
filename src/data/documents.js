import range from 'lodash/range';
import preview1 from '../../public/images/document-preview-1.jpg';
import preview2 from '../../public/images/document-preview-2.jpg';
import year from './year';

const getImage = (i) => (i % 2 === 0 ? preview1 : preview2);

const documents = range(0, 8).map((i) => ({
	id: i,
	title: '11 popular sample tests for Literature national exams',
	image: getImage(i),
	subject: 'Literature',
	description: `11 sample tests for Literature National Exam ${year} will help students revise their knowledge and prepare for all Literature questions to ace the upcoming National Exam ${year}`,
	publishDate: '31/10/2019',
	views: 45020,
	downloads: 40691,
	tags: [
		'Literature National Exams',
		'Literature National Exam prep',
	],
}));

export const sidebarDocuments = range(0, 5).map((i) => ({
	id: i,
	title: `Sample Geology National Exam ${year}`,
	image: getImage(i),
	subject: 'Literature',
	description: `11 sample tests for Literature National Exam ${year} will help students revise their knowledge and prepare for all Literature questions to ace the upcoming National Exam ${year}`,
	publishDate: '31/10/2019',
	views: 45020,
	downloads: 40691,
	tags: [
		'Literature National Exams',
		'Literature National Exam prep',
	],
}));

export const documentDetail = {
	...documents[1],
	summary: `      Kỳ thi THPT Quốc gia 2019 là 1 trong những kỳ thi lớn nhất của đời học sinh và có quyết định đến việc lựa chọn sự nghiệp sau này, chính vì vậy việc ôn luyện thi THPT Quốc gia luôn được các em học sinh cũng như phụ huynh quan tâm. Trước kỳ thi THPT Quốc Gia 2019 chúng ta cần phải tổng hợp, hệ thống lại toàn bộ kiến thức của mình thông qua các đề thi tham khảo THPT Quốc gia 2018 để có được cái nhìn tổng quát nhất.

	Toàn bộ 11 đề thi tham khảo THPT Quốc gia được chúng tôi tổng hợp dưới đây đều có đáp án gợi ý, ngoài ra bạn cũng có thể luyện tập các môn học khác Toán, Địa lý, Sinh học, Tiếng Anh, Hóa Học, Vật lý, Lịch sử để có được sự chuẩn bị tốt nhất cho kỳ thi THPT Quốc Gia 2019.`,
	paper: `ĐỀ SỐ 01
PHẦN 1 – ĐỌC HIỂU

"Bản lĩnh là khi bạn dám nghĩ, dám làm và có thái độ sống tốt. Muốn có bản lĩnh bạn cũng phải kiên trì luyện tập. Chúng ta thường yêu thích những người có bản lĩnh sống. Bản lĩnh đúng nghĩa chỉ có được khi bạn biết đặt ra mục tiêu và phương pháp để đạt được mục tiêu đó. Nếu không có phương pháp thì cũng giống như bạn đang nhắm mắt chạy trên con đường có nhiều ổ gà.
Cách thức ở đây cũng rất đơn giản. Đầu tiên, bạn phải xác định được hoàn cảnh và môi trường để bản lĩnh được thể hiện đúng lúc, đúng nơi, không tùy tiện. Thứ hai bạn phải chuẩn bị cho mình những tài sản bổ trợ như sự tự tin, ý chí, nghị lực, quyết tâm... Điều thứ ba vô cùng quan trọng chính là khả năng của bạn. Đó là những kỹ năng đã được trau dồi cùng với vốn tri thức, trải nghiệm. Một người mạnh hay yếu quan trọng là tùy thuộc vào yếu tố này.

Bản lĩnh tốt là vừa phục vụ được mục đích cá nhân vừa có được sự hài lòng từ những người xung quanh. Khi xây dựng được bản lĩnh, bạn không chỉ thể hiện được bản thân mình mà còn được nhiều người thừa nhận và yêu mến hơn."

(Tuoitre.vn - Xây dựng bản lĩnh cá nhân)

[Câu 1.] Xác định phương thức biểu đạt chính của đoạn trích?
[Câu 2.] Theo tác giả, thế nào là người bản lĩnh?
[Câu 3.] Tại sao tác giả cho rằng "Bản lĩnh tốt là vừa phục vụ được mục đích cá nhân vừa có được sự hài lòng từ những người xung quanh".
[Câu 4.] Theo anh/chị, một người có bản lĩnh sống phải là người như thế nào?`,
};

export default documents;
