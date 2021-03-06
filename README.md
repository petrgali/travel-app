### Работа с репозиторием
* [production ветка](#production)
* [develop ветка](#develop)
* [добавление коммитов](#commits)
* [мерджи](#merge)
* [ВАЖНО!](#Важно)

## production
Ветка main – это основная production ветка: в ней находятся только финальные релизы проекта – то, что можно предложить пользователям (в нашем случае – то, что подлежит проверке). До самого окончания разработки ветка main пустая, содержит только файл README.md. В конце разработки или при наступлении дедлайна в ветку main мержим ветку develop.

## develop 
основная ветка разработки. В ней находится самая актуальная рабочая версия проекта, собираются вместе все готовые части функциональности по мере их завершения.

## commit 
Каждый участник ведёт разработку в своей собственной ветке. Название ветки даётся в соответствии с реализуемой частью функциональности. Данные ветки создаются при начале разработки каждой фичи от develop (актуальной на тот момент).

## merge
Все мержи в ветку develop происходят только через Pull Request. Для того, чтобы разрешить merge conflicts, нужно смержить ветку develop в свою feature ветку.
Ветка считается готовой к мержу в develop, если все комментарии помечены как resolved и как минимум два члена команды поставили approve. Resolve комментария может делать только тот человек, который его оставил.

## Важно!
От каждого участника команды ожидается минимум пять коммитов и минимум два собственных Pull Request, замерженых в ветку develop. Если требования к минимальному количеству коммитов и Pull Request от каждого участника не выполняется, команде начисляются штрафные баллы за недостатки в организации командной работы.