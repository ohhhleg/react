import React from 'react';
import Tencent from '../components/Tencent';
import { Row, Col} from 'antd';
import Breadcrumb from '../components/Breadcrumb';

export default () => (
    <div>
        <Breadcrumb first="文件" second="地图" />
        <Row gutter={16}>
            <Col md={24}>
                <div style={{ height: 580 }}>
                    <Tencent />
                </div>
            </Col>
        </Row>
    </div>
);
