# AngularTrainingIntern

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Câu lệnh và lưu ý sử dụng Angular

1. Create Angular Project: ng new
2. Run Angular Project: ng serve —o —host 192.168.1.xx
3. Build Angular Project: ng build
4. Create component / module / routing / service / guard
    1. Component: ng g c folder/…/name-component
    2. Module / Routing : ng g m folder/…/name-module —routing
    3. Service: ng g s folder/…/name-service
    4. Guard: ng g g folder/…/name-guard
5. Declare Route:
    1. Route Parents:  { path: “name-“path,  loadChildren: () =>      import(“path-to-module”).then((m) => m.name-module),  },
    2. Route Children: { path: “name-“path, component: Component }
    3.  { path: "", pathMatch: "full", redirectTo: "/login" },
    4.  { path: "**", redirectTo: "login" },
6. Khi bạn chạy một ứng dụng Angular, quy trình biên dịch và chạy project sẽ diễn ra như sau:
    1. Kiểm tra cấu hình: Angular CLI (Command Line Interface) sẽ kiểm tra cấu hình dự án bằng tệp angular.json để xác định các tài nguyên, tệp và cấu hình liên quan đến biên dịch và chạy ứng dụng.
    2. Biên dịch mã nguồn: Angular CLI sử dụng trình biên dịch TypeScript để biên dịch mã nguồn TypeScript của ứng dụng thành mã JavaScript. Trong quá trình này, mã TypeScript sẽ được kiểm tra lỗi, chuyển đổi thành JavaScript và tối ưu hóa.
    3. Tạo file tĩnh: Angular CLI sẽ tạo các file tĩnh như HTML, CSS và các tài nguyên khác của ứng dụng. Nếu có các tệp giao diện (template) Angular, chúng sẽ được biên dịch thành JavaScript.
    4. Tích hợp tài nguyên: Angular CLI sẽ tích hợp các tài nguyên như CSS, hình ảnh và các tệp khác vào cấu trúc thư mục đích của ứng dụng.
    5. Chạy ứng dụng: Angular CLI sẽ khởi động máy chủ phát triển tích hợp (development server) để chạy ứng dụng. Máy chủ phát triển cung cấp một môi trường phát triển cục bộ cho ứng dụng Angular, cho phép bạn xem kết quả trực tiếp trên trình duyệt và tự động tải lại trang khi có thay đổi trong mã nguồn.
    6. Kết quả: Sau khi quá trình biên dịch và chạy hoàn tất, ứng dụng Angular của bạn sẽ được mở trên trình duyệt tại địa chỉ được xác định trong cấu hình máy chủ phát triển.
7. Khi một trang web được tải lên trình duyệt, quá trình đọc và hiển thị HTML, CSS và JavaScript diễn ra như sau:
    1. Đọc HTML: Trình duyệt bắt đầu đọc tệp HTML từ đầu đến cuối. Nó phân tích các thẻ HTML và xây dựng cấu trúc DOM (Document Object Model) dựa trên nội dung trong tệp HTML. DOM đại diện cho cấu trúc cây của các phần tử HTML trong tài liệu.
    2. Đọc CSS: Trình duyệt tiếp tục đọc các tệp CSS liên kết hoặc nhúng trong tài liệu HTML. Nó tìm kiếm các quy tắc CSS, các lớp và ID được áp dụng cho các phần tử trong DOM và tính toán các thuộc tính hiển thị như màu sắc, kích thước và vị trí của các phần tử.
    3. Xây dựng Render Tree: Trình duyệt kết hợp cấu trúc DOM và các quy tắc CSS để tạo Render Tree, một cấu trúc cây mới chứa các phần tử được kết hợp từ DOM và các quy tắc CSS đã áp dụng. Render Tree chỉ chứa các phần tử có thể được hiển thị trên trang.
    4. Vẽ và hiển thị: Trình duyệt sử dụng Render Tree để xác định cách hiển thị các phần tử trên trang. Nó tính toán kích thước và vị trí của các phần tử dựa trên thông tin trong Render Tree và các thuộc tính CSS. Cuối cùng, nó vẽ các phần tử lên màn hình theo thứ tự xác định bởi cấu trúc Render Tree.
    5. Đọc và thực thi JavaScript: Nếu có mã JavaScript trong tài liệu HTML hoặc được liên kết từ tệp riêng biệt, trình duyệt đọc và thực thi nó. Mã JavaScript có thể tương tác với DOM và thay đổi cấu trúc và nội dung của trang.
