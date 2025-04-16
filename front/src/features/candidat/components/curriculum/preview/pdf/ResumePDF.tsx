import { jsPDF } from "jspdf";
import { useTranslations } from "next-intl";
import { formatDate } from "@/shared/utils";
import { IPreviewTemplates } from "@/features/candidat/types/preview.type";
import { Button } from "@/shared/components";

export default function PDFwithJsPDF({
    privacy,
    courses,
    education,
    experience,
    hobbies,
    languages,
    lifestatus,
    skills,
    email,
}: IPreviewTemplates) {
    const t = useTranslations("curriculum.previews");

    const generatePDF = async () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const leftColWidth = 60;
        const rightColStart = leftColWidth + 10;

        function htmlToPlainText(html: string) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            return doc.body.textContent || "";
        }

        doc.setFillColor(240, 240, 240);
        doc.rect(0, 0, leftColWidth, 297, "F");

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0);
        doc.text(`${privacy.firstname} ${privacy.surname}`, 5, 15, { maxWidth: leftColWidth - 10 });

        const infoItems: { icon: string; text: string }[] = [
            { icon: "/pdficons/email.png", text: email },
            { icon: "/pdficons/mobile.png", text: privacy.phone },
            { icon: "/pdficons/location.png", text: privacy.resident },
            { icon: "/pdficons/birthday.png", text: formatDate(privacy.birthday, { dateFormat: "full" }) },
            { icon: "", text: lifestatus.maritalStatus },
            { icon: "", text: `Patente ${lifestatus.driverCategory.map(item => item.toUpperCase() + ' ')}` }
        ];

        const loadImage = (src: string): Promise<HTMLImageElement> => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.src = src;
                img.onload = () => resolve(img);
                img.onerror = reject;
            });
        };

        // Загружаем фото, если есть
        let userPhoto: HTMLImageElement | null = null;
        if (privacy.avatar && privacy.avatar[0]) {
            userPhoto = await loadImage(privacy.avatar[0]);
            doc.addImage(userPhoto, "JPEG", 5, 20, 50, 50);
        }

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(50);
        let y = 80;

        const lineHeight = 5; // высота строки
        const blockSpacing = 10; // отступ между блоками (можешь увеличить если нужно)
        for (const item of infoItems) {
            const text = item.text ? String(item.text) : "";
            const lines = doc.splitTextToSize(text, leftColWidth - 10);
            const blockHeight = lines.length * lineHeight

            if (item.icon) {
                try {
                    const icon = await loadImage(item.icon);
                    doc.addImage(icon, "PNG", 5, y - 3, 3, 3);
                    doc.text(lines, 10, y);
                    y += lines.length * 5;
                } catch (err) {
                    // Если иконка не загрузилась — просто текст
                    doc.text(lines, 5, y);
                    y += lines.length * 5;
                }
            } else {
                doc.text(lines, 5, y);
                y += blockHeight
            }
        }

        let rightY = 15;

        const addExperienceSection = () => {
            if (!experience.length) return;

            doc.setFontSize(13);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0);
            doc.text(t("experience"), rightColStart, rightY);
            rightY += 7;

            const timelineX = rightColStart + 1; //отступ самой линии с точками влево
            const circleRadius = 1; // величина точки
            const spacing = 5;
            const offsetY = 5; // поднимаем кружки и линию на 9 пикселей вверх

            const blocks: { top: number; circleY: number; bottom: number }[] = [];

            // Фаза 1: измерим все блоки
            experience.forEach((exp) => {
                const blockTop = rightY;

                rightY += spacing; // дата
                rightY += spacing; // компания

                const descriptionLines = doc.splitTextToSize(exp.description || "", pageWidth - rightColStart - 10);
                rightY += descriptionLines.length * spacing + 5;

                const blockBottom = rightY;

                const circleY = blockTop + spacing + spacing / 2 - offsetY; // сместили вверх
                blocks.push({ top: blockTop - offsetY, circleY, bottom: blockBottom - offsetY });
            })

            // Фаза 2: рисуем линию (от top первого до bottom последнего)
            const fullLineTop = blocks[0].top;
            const fullLineBottom = blocks[blocks.length - 1].bottom;

            doc.setDrawColor(230, 230, 250); // light purple
            doc.setLineWidth(1);
            doc.line(timelineX, fullLineTop, timelineX, fullLineBottom);

            // Фаза 3: рисуем каждый блок + кружок
            rightY = blocks[0].top + offsetY; // возвращаем в изначальную позицию

            experience.forEach((exp, idx) => {
                const { circleY } = blocks[idx];

                // Кружок
                doc.setDrawColor(153, 102, 204); // border
                doc.setFillColor(255, 255, 255); // white
                doc.circle(timelineX, circleY + 1, circleRadius, "FD");

                // Дата
                const start = formatDate(exp.startDate, { dateFormat: "mm/yyyy" });
                const end = exp.currently ? t("currently_work") : formatDate(exp.endDate, { dateFormat: "mm/yyyy" });
                const period = `${start} - ${end}`;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(102, 51, 153);
                doc.text(period, rightColStart + 5, rightY);
                rightY += spacing;

                // Компания
                doc.setFont("helvetica", "bold");
                doc.setFontSize(11);
                doc.setTextColor(0);
                doc.text(exp.company, rightColStart + 5, rightY);
                rightY += spacing;

                // Описание
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(80);
                const descriptionLines = doc.splitTextToSize(exp.description || "", pageWidth - rightColStart - 10);
                doc.text(descriptionLines, rightColStart + 5, rightY);
                rightY += descriptionLines.length * spacing + spacing;
            });

            doc.setTextColor(0);
        }

        const addEducationSection = () => {
            if (!education.length) return;

            doc.setFontSize(13);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0);
            doc.text(t("education"), rightColStart, rightY);
            rightY += 7;

            const timelineX = rightColStart + 1;
            const circleRadius = 1;
            const spacing = 5;
            const offsetY = 5;

            const blocks: { top: number; circleY: number; bottom: number }[] = [];

            // Фаза 1: измерим все блоки
            education.forEach((ed) => {
                const blockTop = rightY;

                rightY += spacing; // дата
                rightY += spacing; // школа

                const descriptionLines = doc.splitTextToSize(ed.description || "", pageWidth - rightColStart - 10);
                rightY += descriptionLines.length * spacing - 3

                const gradeLines = doc.splitTextToSize(ed.grade || "", pageWidth - rightColStart - 10);
                rightY += gradeLines.length * spacing + spacing;

                const blockBottom = rightY;

                const circleY = blockTop + spacing + spacing / 2 - offsetY;
                blocks.push({ top: blockTop - offsetY, circleY, bottom: blockBottom - offsetY });
            });

            // Фаза 2: рисуем линию
            const fullLineTop = blocks[0].top;
            const fullLineBottom = blocks[blocks.length - 1].bottom;

            doc.setDrawColor(230, 230, 250);
            doc.setLineWidth(1);
            doc.line(timelineX, fullLineTop, timelineX, fullLineBottom);

            // Фаза 3: рисуем блоки и кружки
            rightY = blocks[0].top + offsetY;

            education.forEach((ed, idx) => {
                const { circleY } = blocks[idx];

                // Кружок
                doc.setDrawColor(153, 102, 204);
                doc.setFillColor(255, 255, 255);
                doc.circle(timelineX, circleY + 1, circleRadius, "FD");

                // Дата
                const start = formatDate(ed.startdate, { dateFormat: "year" });
                const end = formatDate(ed.enddate, { dateFormat: "year" });
                const period = `${start} - ${end}`;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(102, 51, 153);
                doc.text(period, rightColStart + 5, rightY);
                rightY += spacing;

                // Школа
                if (ed.school) {
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(11);
                    doc.setTextColor(0);
                    doc.text(ed.school, rightColStart + 5, rightY);
                    rightY += spacing;
                }

                // Специальность
                if (ed.grade) {
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(10);
                    doc.setTextColor(80);
                    const gradeLines = doc.splitTextToSize(ed.grade || '', pageWidth - rightColStart - 10);
                    doc.text(ed.grade || '', rightColStart + 5, rightY);
                    rightY += gradeLines.length * spacing;
                }

                //Описание
                if (ed.description) {
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(10);
                    doc.setTextColor(80);
                    const descriptionLines = doc.splitTextToSize(ed.description || '', pageWidth - rightColStart - 10);
                    doc.text(ed.description || '', rightColStart + 5, rightY);
                    rightY += descriptionLines.length * spacing + spacing;
                }
            });

            doc.setTextColor(0);
        }

        const addCoursesSection = () => {
            if (!courses.length) return;

            doc.setFontSize(13);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0);
            doc.text(t("courses"), rightColStart, rightY);
            rightY += 7;

            const timelineX = rightColStart + 1;
            const circleRadius = 1;
            const spacing = 5;
            const offsetY = 5;

            const blocks: { top: number; circleY: number; bottom: number }[] = [];

            courses.forEach((course) => {
                const blockTop = rightY;

                rightY += spacing; // дата
                rightY += spacing; // учреждение + оценка

                const blockBottom = rightY;
                const circleY = blockTop + spacing + spacing / 2 - offsetY;
                blocks.push({ top: blockTop - offsetY, circleY, bottom: blockBottom - offsetY });
            });

            const fullLineTop = blocks[0].top;
            const fullLineBottom = blocks[blocks.length - 1].bottom;

            doc.setDrawColor(230, 230, 250);
            doc.setLineWidth(1);
            doc.line(timelineX, fullLineTop, timelineX, fullLineBottom);

            rightY = blocks[0].top + offsetY;

            courses.forEach((course, idx) => {
                const { circleY } = blocks[idx];

                doc.setDrawColor(153, 102, 204);
                doc.setFillColor(255, 255, 255);
                doc.circle(timelineX, circleY - 4, circleRadius, "FD");

                const start = formatDate(course.startdate, { dateFormat: "year" });
                const end = formatDate(course.enddate, { dateFormat: "year" });
                const period = `${start} - ${end}`;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(102, 51, 153);
                doc.text(period, rightColStart + 5, rightY);
                rightY += spacing;

                doc.setFont("helvetica", "bold");
                doc.setFontSize(11);
                doc.setTextColor(0);
                const courseLines = doc.splitTextToSize(course.grade || '', pageWidth - rightColStart - 10);
                doc.text(`${course.institution} — ${course.grade}`, rightColStart + 5, rightY);
                rightY += courseLines * spacing + 2;
            })

            doc.setTextColor(0);
        }

        // Отдельный блок "О себе" внизу
        const aboutMyText = htmlToPlainText(privacy.about_my)
        doc.setFont("helvetica", "normal");
        const aboutLines = doc.splitTextToSize(aboutMyText, rightColStart + 50, 0);
        doc.text(aboutLines, rightColStart, rightY);
        y += aboutLines.length * lineHeight + 10;
        rightY += 5
        addEducationSection()
        rightY += 5
        addExperienceSection()
        rightY += 5
        addCoursesSection()

        // Загружаем изображение
        const logo = new Image();
        logo.src = "/logo.png"

        logo.onload = () => {
            const totalPages = (doc as unknown as { getNumberOfPages: () => number }).getNumberOfPages();
            const pageHeight = doc.internal.pageSize.getHeight();
            const pageWidth = doc.internal.pageSize.getWidth();

            const logoSize = { width: 20, height: 8 };
            const logoMarginBottom = 7;
            const rightX = pageWidth - logoSize.width - 10;

            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.addImage(
                    logo,
                    "PNG",
                    rightX,
                    pageHeight - logoSize.height - logoMarginBottom,
                    logoSize.width,
                    logoSize.height
                );
            }

            doc.save(`${privacy.surname}_CV.pdf`);
        };
    };


    return (
        <div>
            <Button onClick={generatePDF}>Scarica CV</Button>
        </div>
    );
}
